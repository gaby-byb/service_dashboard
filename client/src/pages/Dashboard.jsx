import { ScheduleTable } from "@/components/schedule-table";
import { InvoiceTable } from "@/components/invoice-table";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  const employee = JSON.parse(localStorage.getItem("employee"));

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <h1>Welcome, {employee?.name || "Employee"}</h1>
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1>Current Jobs</h1>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScheduleTable />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <InvoiceTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
