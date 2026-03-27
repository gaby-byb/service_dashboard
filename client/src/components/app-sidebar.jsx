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
import { ChevronRightIcon, LogOut } from "lucide-react";

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
          type: "link",
        },
        {
          title: "Schedule",
          url: "/schedule",
          type: "link",
        },
        {
          title: "Invoices",
          url: "/invoices",
          type: "link",
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
          type: "link",
        },
      ],
    },
    {
      title: "Management",
      url: "#",
      items: [
        { title: "Employees", url: "/employees", type: "link" },
        { title: "Services Catalog", url: "/services", type: "link" },
      ],
    },

    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Account",
          url: "#",
          type: "link",
        },
        {
          title: "Logout",
          actionKey: "logout",
          type: "action",
        },
      ],
    },
  ],
};

const actions = {
  //anonymous arrow function used as method
  logout: () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  },
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
                        {item.type === "action" ? (
                          <SidebarMenuButton onClick={actions[item.actionKey]}>
                            {item.title}
                          </SidebarMenuButton>
                        ) : (
                          <SidebarMenuButton
                            asChild
                            isActive={location.pathname === item.url}
                          >
                            <Link to={item.url}>{item.title}</Link>
                          </SidebarMenuButton>
                        )}
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
