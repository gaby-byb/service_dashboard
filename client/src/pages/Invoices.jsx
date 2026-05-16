import { InvoiceTable } from "@/components/invoice-table";
import { Sidebar } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Invoices() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const getInvoicesData = async () => {
      try {
        let response = await axios.get("/api/invoices");
        console.log(response);
        setInvoices(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getInvoicesData();
  }, []);
  return (
    <>
      <title>Invoices</title>
      <Sidebar />
      <InvoiceTable invoices={invoices} />
    </>
  );
}
