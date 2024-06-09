import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Job from "./jobs";
import { request } from "../../services/utilities";

const Index = () => {
  // const [filter, setFilter] = useState('');
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);

  const [jobType, setJobType] = useState([]);
  const [professionalLevel, setProfessionalLevel] = useState([]);

  const fetchJobs = async () => {
    const url = `job/all`;
    try {
      const rs = await request(url, "GET", true);
      setOriginalJobs(rs.data);
      setJobs(rs.data);

    } catch (err) {
      console.log(err);
    }
  };

  const fetchJobsFilter = async () => {
    const url = `jobtype/all`;
    const urll = `professional-level/all`;

    try {
      const rs = await request(url, "GET", true);
      const rsl = await request(urll, "GET", true);
      setJobType(rs.data);
      setProfessionalLevel(rsl.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleFilterJobType = (id) => {
    if (!originalJobs) {
      setOriginalJobs(jobs);
  }
  const updatedJobs = [...originalJobs];
  const filteredJobs = updatedJobs.filter((job) => job.jobType === id);
  setJobs(filteredJobs);
  };
  const handleFilterJobsByLevel = (id) => {
    if (!originalJobs) {
      setOriginalJobs(jobs);
  }
  const updatedJobs = [...originalJobs];
  const filteredJobs = updatedJobs.filter((job) => job.professionalLevel === id);
  setJobs(filteredJobs);
  };
  useEffect(() => {
    fetchJobsFilter();
    fetchJobs();
  }, []);

  return (
    <>
      <main className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 px-4 max-w-full w-full">
            <div className="flex flex-col sm:flex-row">
              <Sidebar
                jobTypes={jobType}
                professionalLevels={professionalLevel}
                handleFilterJobType={handleFilterJobType}
                handleFilterJobsByLevel={handleFilterJobsByLevel}
              />
              <div>
                <p className="mt-2 ml-3 text-xs text-zinc-500 max-md:max-w-full">
                  Showing all jobs
                </p>
                <br />
                <Job jobs={jobs} />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
