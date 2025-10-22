import SideNav from '@/app/ui/dashboard/sidenav';
import ContextPane from '@/app/ui/soil/context-pane-accordian';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden h-full">
      <div className="flex-grow p-2 md:h-full md:overflow-y-auto md:p-2">{children}</div>
      <div className="w-full flex-none md:w-96 md:h-full md:overflow-y-auto">
        <ContextPane />
      </div>
    </div>
  );
}