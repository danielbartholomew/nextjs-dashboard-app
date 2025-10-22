'use client';

import { useFarmField } from "@/app/dashboard/soil-sidebar/farm-field-provider";

export default function FieldNameInput(
) {
    const { fieldId, fieldName, setFieldId, setFieldName  } = useFarmField();
  
  return <div className="mb-4">
    <label className="block text-sm font-medium text-slate-700 mb-2">Field</label>
    {/* Use a 12-column grid so we can mimic Bootstrap's col-2 / col-10 behavior */}
    <div className="grid grid-cols-10 gap-2 items-center">
      <input
        type="text"
        value={fieldId}
        onChange={(e) => setFieldId(e.target.value)}
        className="col-span-12 sm:col-span-2 rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <input
        type="text"
        value={fieldName}
        onChange={(e) => setFieldName(e.target.value)}
        className="col-span-12 sm:col-span-8 rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  </div>
}