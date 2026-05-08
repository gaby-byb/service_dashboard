import JobsTable from "@/components/jobs-table";
import { Sidebar } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobsData = async () => {
      try {
        let response = await axios.get("/api/jobs");
        setJobs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getJobsData();
  }, []);
  return (
    <>
      <title>Jobs</title>
      <Sidebar />
      <JobsTable jobs={jobs} />
    </>
  );
}
