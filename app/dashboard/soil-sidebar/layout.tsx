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
import { Separator } from '@/components/ui/separator';
import FarmFieldProvider from './farm-field-provider';




export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}
      style={{ '--sidebar-width': '24rem' } as React.CSSProperties}>
      <main className="w-full min-h-screen relative">
        <div className="w-full h-full"><Map /></div>
      </main>
      <Sidebar collapsible="offcanvas" side="right">
        <br/>
        <SidebarContent>
          <FarmFieldProvider>
            {children}
          </FarmFieldProvider>
        </SidebarContent>
      </Sidebar>

    </SidebarProvider>
  )
}