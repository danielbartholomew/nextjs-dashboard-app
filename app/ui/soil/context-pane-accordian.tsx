import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ProposalsPane } from "./panes/proposals";

export default function ContextPane() {
  return (
    // make the pane fill its parent height and scroll internally when content overflows
    <div className="flex flex-col px-3 py-4 md:px-2 h-full md:h-full md:overflow-y-auto">

      {/* Selected farm: dropdown + button */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Selected farm</label>
        <div className="flex items-center gap-2">
          <select className="flex-1 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Farm A</option>
            <option>Farm B</option>
            <option>Farm C</option>
          </select>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700">Apply</button>
        </div>
      </div>

      {/* Field name input */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-slate-700 mb-2">Field</label>
        <input
          type="text"
          placeholder="Enter field name"
          className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Accordion with requested sections. Each content contains a simple <p> text as requested. */}
      <Accordion type="single" collapsible className="space-y-2">
        <AccordionItem value="proposals">
          <AccordionTrigger>Proposals</AccordionTrigger>
          <AccordionContent>
            <ProposalsPane />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="clusters">
          <AccordionTrigger>Clusters</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-slate-600">Clusters content</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="risk">
          <AccordionTrigger>Risk</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-slate-600">Risk content</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="notes">
          <AccordionTrigger>Notes</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-slate-600">Notes content</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="crops">
          <AccordionTrigger>Crops</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-slate-600">Crops content</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="soil">
          <AccordionTrigger>Soil</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-slate-600">Soil content</p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="draiage">
          <AccordionTrigger>Draiage</AccordionTrigger>
          <AccordionContent>
            <p className="text-sm text-slate-600">Draiage content</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}