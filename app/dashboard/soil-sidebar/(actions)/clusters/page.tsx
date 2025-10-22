import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";

export default function Clusters() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Clusters</SidebarGroupLabel>
      <SidebarGroupContent>
         <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Field to cluster</label>
        <div className="flex items-center gap-2">
          <select className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">+</button>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">x</button>
        </div>
      </div>

      </SidebarGroupContent>
    </SidebarGroup>
  )
}