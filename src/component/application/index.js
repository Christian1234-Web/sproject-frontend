import React, { useEffect, useState } from "react";
import Job from "./jobs";
import SSRStorage from "../../services/storage";
import { USER_COOKIE } from "../../services/constants";
import { request } from "../../services/utilities";
const storage = new SSRStorage();


const Index = () => {
  const [applications,setApplications] = useState([]);

  const fetchJobs = async () => {
    const user =await  storage.getItem(USER_COOKIE)
    const url = `application/user/${user.user._id}`;
    try {
      const rs = await request(url, "GET", true);
      console.log(rs)
      setApplications(rs.data);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    fetchJobs();
  },[])
  return (
    <>
      <main className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 px-4 max-w-full w-full">
          <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Applications
            </h1>
            <p className="text-xs text-zinc-500 max-md:max-w-full">
              Manage and view your jobs applications here
            </p>
                <br />
                <Job applications={applications} />
               
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
