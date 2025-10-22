import Link from "next/link";
import { Button } from "../../button";

export type ProposalData = {
  proposals?: string[];
  status?: 'pending' | 'approved';
}

export function ProposalsPane() {

  const data = getData();

  function getData(): ProposalData {
    return {
      status: 'pending',
      proposals: ['Break up the field into smaller sections', 'Test soil pH levels', 'Add organic compost', 'Implement crop rotation', 'Install drainage system']
    };
  }

  return (
    <div className="p-4">

      {data.status === 'pending' ? (
        <>
          <h3 className="text-xl font-semibold">⚠️ Pending approval</h3>
        </>
      ) : (
        <>
          <h3 className="text-xl font-semibold">✅ Approved</h3>
        </>
      )}
      <br />
      {data?.proposals?.map((item, index) => (
        <div key={index} className="mb-2 flex items-start">
          <div className="mt-2 mr-2 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500">
          </div>
          <p>{item}</p>
        </div>
      ))}

      <div className="mt-6 flex justify-end gap-4">
        <Button
          className="flex h-10 items-center rounded-lg px-4 text-sm font-medium"
        >
          Edit
        </Button>
        <Button type="submit">Approve</Button>
      </div>
    </div>
  );
}