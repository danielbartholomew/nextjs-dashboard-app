'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import postgres from 'postgres';
import { z } from 'zod';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const InvoiceSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Select a customer',
  }),
  amount: z.coerce.number().gt(0, {
    message: 'Amount must be greater than 0',
  }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Select an invoice status',
  }),
  date: z.string(),
});

const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });
const UpdateInvoice = InvoiceSchema.omit({ id: true, date: true });

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function createInvoice(prevState: State, formData: FormData) {

  const validatedData = CreateInvoice.safeParse({
    customerId: formData.get('customerId') as string,
    amount: formData.get('amount') as string,
    status: formData.get('status') as 'pending' | 'paid',
  });

  if (!validatedData.success) {
    return {
      errors: validatedData.error.flatten().fieldErrors,
      message: 'Please correct the errors.',
    };
  }

  const data = validatedData.data;

  const amountInCents = data?.amount * 100;
  const date = new Date().toISOString().split('T')[0];

  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${data.customerId}, ${amountInCents}, ${data.status}, ${date})
    `;
  } catch (error) {
    return { message: 'Database error Failed to create invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

}

export async function updateInvoice(id: string, formData: FormData) {
  const data = UpdateInvoice.parse({
    customerId: formData.get('customerId') as string,
    amount: formData.get('amount') as string,
    status: formData.get('status') as 'pending' | 'paid',
  });
  const amountInCents = data?.amount * 100;

  try {
    await sql`
      UPDATE invoices
      SET customer_id = ${data.customerId},
          amount = ${amountInCents},
          status = ${data.status}
          WHERE id = ${id}
          `;
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Failed to update invoice.' };
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function deleteInvoice(id: string) {


  try {
    await sql`
      DELETE FROM invoices
      WHERE id = ${id}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    return { message: 'Failed to delete invoice.' };
  }

  revalidatePath('/dashboard/invoices');
}