import { Outlet } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import Header from "./ui/header";

export default function DashboardLayout() {
  const employee = JSON.parse(localStorage.getItem("employee"));
  console.log(employee);
  return (
    <>
      <SidebarProvider>
        <AppSidebar employee={employee} />
        <SidebarInset>
          <Header />
          <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b bg-background px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <ModeToggle />
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
