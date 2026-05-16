import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function InvoiceTable({ invoices }) {
  const total = (invoices || []).reduce((sum, invoice) => {
    return sum + Number(invoice.amount);
  }, 0);

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Job ID</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium">#{invoice.id}</TableCell>
            <TableCell>{invoice.job_id}</TableCell>
            <TableCell>{invoice.paid ? "Paid" : "Payment Due"}</TableCell>
            <TableCell className="text-right">
              ${Number(invoice.amount).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">${total.toFixed(2)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
