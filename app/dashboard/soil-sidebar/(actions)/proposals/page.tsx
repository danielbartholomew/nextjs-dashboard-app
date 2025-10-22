import { ProposalsPane } from "@/app/ui/soil/panes/proposals";
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Proposals</SidebarGroupLabel>
      <SidebarGroupContent>
        <ProposalsPane></ProposalsPane>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}