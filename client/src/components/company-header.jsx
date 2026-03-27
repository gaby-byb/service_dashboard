import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import * as React from "react";

export function CompanyHeader({ employee }) {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <div className="flex items-center gap-2 px-2 py-1.5 overflow-hidden">
              {/* Logo Container - fixed width/height for the square icon */}
              <div className="flex items-center justify-center size-11 shrink-0 rounded-lg bg-green-900 text-white font-semibold text-md">
                HQS
              </div>
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">{employee?.name}</span>
              <span className="truncate text-xs text-sidebar-foreground/70">
                Dashboard
              </span>
            </div>
          </div>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
