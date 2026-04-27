import { InvoiceTable } from "@/components/invoice-table";
import { Sidebar } from "lucide-react";

export default function Invoices() {
  return (
    <>
      <title>Invoices</title>
      <Sidebar />
      <InvoiceTable />
    </>
  );
}
