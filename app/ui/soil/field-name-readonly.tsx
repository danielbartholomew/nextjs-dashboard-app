'use client';

import { useFarmField } from "@/app/dashboard/soil-sidebar/farm-field-provider";

export default function FieldNameReadOnly() {
  const { fieldId, fieldName } = useFarmField();
  return (

    <input
      type="text"
      readOnly
      value={`${fieldId} - ${fieldName}`}
      aria-readonly="true"
      className="col-span-12 sm:col-span-8 sm:rounded-md border border-slate-200 bg-slate-50 text-slate-700 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-0 cursor-default"
    />
  );
}