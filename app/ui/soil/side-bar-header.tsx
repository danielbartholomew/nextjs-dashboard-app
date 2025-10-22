import {
  SidebarHeader
} from "@/components/ui/sidebar"
import FieldNameInput from "./field-name-input"


export default function SoilSidebarHeader() {

  return (
    <SidebarHeader>
      {/* Selected farm: dropdown + button */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Selected farm</label>
        <div className="flex items-center gap-2">
          <select className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Farm A</option>
            <option>Farm B</option>
            <option>Farm C</option>
          </select>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">+</button>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">♡</button>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">...</button>
        </div>
      </div>

      <FieldNameInput />

    </SidebarHeader>

  )
}