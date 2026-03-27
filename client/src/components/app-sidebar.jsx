import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";
import { CompanyHeader } from "./company-header";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ChevronRightIcon } from "lucide-react";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Operations",
      url: "#",
      items: [
        {
          title: "Active Jobs",
          url: "/jobs",
        },
        {
          title: "Schedule",
          url: "/schedule",
        },
        {
          title: "Invoices",
          url: "/invoices",
        },
      ],
    },
    {
      title: "Customer Management",
      url: "#",
      items: [
        {
          title: "Customers",
          url: "/customers",
        },
      ],
    },
    {
      title: "Management",
      url: "#",
      items: [
        { title: "Employees", url: "/employees" },
        { title: "Services Catalog", url: "/services" },
      ],
    },

    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Account",
          url: "#",
        },
        {
          title: "Logout",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ employee, ...props }) {
  const location = useLocation();
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <CompanyHeader employee={employee} />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <Collapsible
            key={item.title}
            title={item.title}
            defaultOpen
            className="group/collapsible"
          >
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              >
                <CollapsibleTrigger>
                  {item.title}{" "}
                  <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {item.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={location.pathname === item.url}
                        >
                          <Link to={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
