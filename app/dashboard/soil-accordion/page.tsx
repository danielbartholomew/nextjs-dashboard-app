import ContextPane from "@/app/ui/soil/context-pane-accordian";
import Map from "@/app/ui/soil/map";


export default async function Page() {

  return (
    // Make this a column flex container so the Map can grow to fill available space
    <div className="w-full flex flex-col h-full">
      <h1 className="text-2xl mb-4">Soil Dashboard</h1>

      <div className="flex-1 min-h-0">
        <Map />
      </div>

    </div>
  );
}