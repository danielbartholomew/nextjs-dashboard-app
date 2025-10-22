import SoilSidebarHeader from "@/app/ui/soil/side-bar-header";
import ContextPane from "@/app/ui/soil/context-pane-accordian";
import Map from "@/app/ui/soil/map";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

// Menu items.
const items = [
  {
    title: "Proposals",
    icon: CalendarDaysIcon,
    url: "/dashboard/soil-sidebar/proposals",
  },
  {
    title: "Clusters",
    icon: CalendarDaysIcon,
    url: "/dashboard/soil-sidebar/clusters",
  },
  {
    title: "Risk",
    icon: CalendarDaysIcon,
    url: '#'
  },
  {
    title: "Notes",
    icon: CalendarDaysIcon,
    url: '#'
  },
  {
    title: "Crops",
    icon: CalendarDaysIcon,
    url: '#'
  },
  {
    title: "Soil",
    icon: CalendarDaysIcon,
    url: '#'
  },
  {
    title: "Drainage",
    icon: CalendarDaysIcon,
    url: '#'
  },
]

export default async function Page() {

  return (
    <SidebarGroup>

      <SoilSidebarHeader />

      <SidebarGroupLabel>Menu</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>

  );
}