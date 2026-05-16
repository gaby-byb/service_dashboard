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

// const jobs = [
//   {
//     id: 4,
//     customer: "Sarah Johnson",
//     scheduled_date: "2026-03-10",
//     status: "in_progress",
//     notes: "Interior repaint living room",
//     services: [
//       {
//         id: 1,
//         name: "Interior Painting",
//         price: 1200,
//       },
//       {
//         id: 3,
//         name: "Pressure Washing",
//         price: 300,
//       },
//     ],
//     employees: [
//       {
//         id: 1,
//         name: "Carlos Ramirez",
//       },
//       {
//         id: 2,
//         name: "Jake Miller",
//       },
//     ],
//   },

//   {
//     id: 5,
//     customer: "Mike Thompson",
//     scheduled_date: "2026-03-12",
//     status: "quoted",
//     notes: "Quoted exterior repaint",
//     services: [
//       {
//         id: 2,
//         name: "Exterior Painting",
//         price: 2500,
//       },
//     ],
//     employees: [
//       {
//         id: 3,
//         name: "Anthony Davis",
//       },
//     ],
//   },
// ];

export default function JobsTable({ jobs }) {
  return (
    <Table>
      <TableCaption>A list of your recent jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Job</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Notes</TableHead>
          <TableHead>Services</TableHead>
          <TableHead>Employees</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id}>
            <TableCell>{job.id}</TableCell>
            <TableCell>{job.customer}</TableCell>
            <TableCell>
              {new Date(job.scheduled_date).toLocaleDateString()}
            </TableCell>
            <TableCell>{job.status}</TableCell>
            <TableCell>{job.notes}</TableCell>

            <TableCell>
              {job.services.map((service) => (
                <p key={service.id}>
                  {service.name} - {service.price}
                </p>
              ))}
            </TableCell>
            <TableCell>
              {job.employees.map((employee) => (
                <p key={employee.id}>{employee.name}</p>
              ))}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow></TableRow>
      </TableFooter>
    </Table>
  );
}
