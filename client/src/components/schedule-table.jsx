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

const jobs = [
  {
    id: "JOB001",
    time: "9:00 AM",
    address: "123 Main St",
    service: "Exterior Painting",
    crew: "Carlos + 2",
    status: "In Progress",
  },
  {
    id: "JOB002",
    time: "11:30 AM",
    address: "45 Oak Ave",
    service: "Pressure Washing",
    crew: "Miguel",
    status: "Scheduled",
  },
  {
    id: "JOB003",
    time: "2:00 PM",
    address: "78 Pine Rd",
    service: "Interior Paint",
    crew: "Luis + 1",
    status: "Scheduled",
  },
  {
    id: "JOB004",
    time: "8:00 AM",
    address: "22 Cedar Ln",
    service: "Deck Staining",
    crew: "Jose",
    status: "Completed",
  },
];

export function ScheduleTable() {
  return (
    <Table>
      <TableCaption>A list of your current jobs.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Time</TableHead>
          <TableHead>Address</TableHead>
          <TableHead>Service</TableHead>
          <TableHead>Crew</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jobs.map((job) => (
          <TableRow key={job.id}>
            <TableCell className="font-medium">{job.time}</TableCell>
            <TableCell>{job.address}</TableCell>
            <TableCell>{job.service}</TableCell>
            <TableCell className="text-right">{job.crew}</TableCell>
            <TableCell>{job.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={5}>Total Jobs: {jobs.length}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
