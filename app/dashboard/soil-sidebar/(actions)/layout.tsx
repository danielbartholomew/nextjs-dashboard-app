import SoilSidebarHeader from '@/app/ui/soil/side-bar-header';
import Map from '@/app/ui/soil/map';
import { SidebarProvider } from '@/components/ui/sidebar';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/outline"
import Link from 'next/link';
import SoilMenu from '@/app/ui/soil/menu';
import FieldNameReadOnly from '@/app/ui/soil/field-name-readonly';




export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Header row: back button + menu in one line */}
      <div className="flex items-center gap-4 p-2">
        <Link
          href="/dashboard/soil-sidebar"
          className="inline-flex items-center rounded-md bg-white/80 p-2 shadow hover:bg-white/90"
          aria-label="Back to soil sidebar"
        >
          <ArrowLeftIcon className="h-5 w-5 text-slate-700" />
          <span className="sr-only">Back</span>
        </Link>
        <FieldNameReadOnly />
      </div>

      <div>
        {children}
      </div>
    </>
  )
}