import SSRStorage from "../../services/storage";
import { USER_COOKIE } from "../../services/constants";
import { useEffect, useState } from "react";
import { request } from "../../services/utilities";
import { Notyf } from "notyf";
import { Spinner } from "reactstrap";
const notyf = new Notyf();

const storage = new SSRStorage();

function ApplyJob({ job, setApply }) {
  const [user, setUser] = useState(null);

  const makeApplication = async (jobId) => {
    const data = { userId: user?._id, jobId };
    const url = `application/create`;
    try {
      const rs = await request(url, "POST", true, data);
      if (rs.status === "SUCCESS") {
        notyf.success("Job Applied successful");
      }
    } catch (err) {
      notyf.error(err.message);
      console.log(err);
    }
  };
  const getTimeStape = (date) => {
    const timestamp = date;
    const originalDate = new Date(timestamp);
    const currentDate = new Date();
    const timeDifference = currentDate - originalDate;
    const secondsDifference = Math.floor(timeDifference / 1000);
    const minutesDifference = Math.floor(secondsDifference / 60);
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    if (daysDifference > 0) {
      let time = `${daysDifference} days ago`;
      return time;
    } else if (hoursDifference > 0) {
      let time = `${hoursDifference} hours ago`;
      return time;
    } else if (minutesDifference > 0) {
      let time = `${minutesDifference} minutes ago`;
      return time;
    } else {
      let time = `${secondsDifference} seconds ago`;
      return time;
    }
  };

  useEffect(() => {
    async function fetchUser() {
      const user = await storage.getItem(USER_COOKIE);
      console.log(user);
      setUser(user.user);
    }
    fetchUser();
  }, []);

  return (
    <section className="flex flex-col pb-8 bg-white rounded-lg max-w-[691px]">
      <img
        loading="lazy"
        src={job?.image}
        alt=""
        className="w-full aspect-[2] max-md:max-w-full"
      />

      <section className="flex flex-col px-9 mt-9 w-full max-md:px-5 max-md:max-w-full">
        <p className="text-base font-medium text-neutral-600 max-md:max-w-full">
          {job.company}
        </p>
        <p className="mt-6 text-sm font-medium text-zinc-700 max-md:max-w-full">
          {job?.title}
        </p>
        <div className="flex gap-4 self-start mt-3 text-xs text-neutral-500">
          <div className="flex gap-0 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/add149b7c63063abcd33dc9de9b799c999132543206892b8efd386874ebdb2f1?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="Location Icon"
              className="shrink-0 w-5 aspect-square"
            />
            <div>{job?.location}</div>
          </div>
          <div className="my-auto">Active</div>
          <div className="my-auto">Intern</div>
          <div className="flex gap-2.5 items-center self-start">
            <div className="self-stretch my-auto">{job?.workType}</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/99b58b842c537024fa1a491d2a5f9c35e5095283a849fb901c6447994a159bb4?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="Clock Icon"
              className="shrink-0 self-stretch aspect-square w-[17px]"
            />
            <div className="self-stretch my-auto">
              {getTimeStape(job?.createdAt)}
            </div>
          </div>
        </div>
        <section className="flex flex-col px-4 py-7 mt-8 bg-white rounded-md shadow max-md:max-w-full">
          <h2 className="border-black-400 border-b-2 text-sm font-medium text-neutral-700 max-md:max-w-full">
            Role Details
          </h2>

          <div className="flex gap-2.5 self-start mt-5">
            <div className="flex flex-col items-center">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9337c67157ceb4c1683de14f451f0e382f88e315a457321eb1bc913c921f487?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                alt="Application Deadline Icon"
                className="w-10 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff2f30443dbdd232a795b51849f130b885989e16171217e651fb0fdf3ffe3fb?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                alt="Job Posted On Icon"
                className="mt-4 w-10 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd989c1928e06b4936c1f85385bdb731f4f2c6b473af7587a03ae46a4fa7f36c?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                alt="Work Type Icon"
                className="mt-4 w-10 aspect-square"
              />
            </div>
            <div className="flex flex-col my-auto text-xs text-neutral-500">
              <div>Application Deadline</div>
              <div className="mt-1.5 font-medium text-zinc-600">
                {new Date(job?.deadline).toDateString()}
              </div>
              <div className="mt-7">Job posted on</div>
              <div className="mt-1.5 font-medium text-zinc-600">
                {new Date(job?.createdAt).toDateString()}
              </div>
              <div className="mt-7">Work type</div>
              <div className="mt-1.5 font-medium text-zinc-600">
                {job?.workType}
              </div>
            </div>
          </div>
          <div className="flex gap-2.5 self-start mt-4 text-xs whitespace-nowrap text-neutral-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00292f892d757d76e7cf09ffa5b43d43f77fcb4b57c6b83c093d2c8ee5db5ad6?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
              alt="Industry Icon"
              className="shrink-0 w-10 aspect-square"
            />
            <div className="my-auto">Industry</div>
          </div>
        </section>
        <h2 className="mt-7 text-sm font-medium text-neutral-700 max-md:max-w-full mb-4">
          Apply For This Role
        </h2>
        <form className="flex flex-col">
          <label htmlFor="fullName" className="text-xs">
            Full Name
          </label>
          <input
            className="justify-center no-underline focus:outline-none items-start py-3 pl-2 mt-2 text-xs font-medium rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full"
            type="text"
            id="fullName"
            value={user?.fullname}
          />
          <label htmlFor="headline" className="text-xs">
            Title
          </label>
          <input
            className="justify-center no-underline  items-start py-3 focus:outline-none pl-2 mt-2 text-xs font-medium rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full"
            type="text"
            id="headline"
            defaultValue={job?.title}
          />
          <label htmlFor="emailAddress" className="text-xs">
            Email Address
          </label>
          <input
            className="justify-center items-start no-underline focus:outline-none  py-3 pl-2 mt-2 text-xs font-medium whitespace-nowrap rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full"
            type="email"
            id="emailAddress"
            value={user?.email}
          />
          <label htmlFor="phoneNumber" className="text-xs">
            Phone Number
          </label>
          <input
            className="justify-center items-start no-underline  focus:outline-none py-3 pl-2 mt-2 text-xs font-medium whitespace-nowrap rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full"
            type="tel"
            id="phoneNumber"
            value={user?.phoneNumber}
          />
          <label htmlFor="coverletter" className="text-xs">
            Cover Letter
          </label>
          <textarea
            className="justify-center items-start no-underline  focus:outline-none py-3 pl-2 mt-2 text-xs font-medium whitespace-nowrap rounded-md border border-solid border-zinc-400 text-zinc-600 max-md:pr-5 max-md:max-w-full"
            type="text"
            id="coverletter"
            value={user?.coverletter}
            rows={'10'}
          />
          <button
            type="button"
            onClick={() => makeApplication(job?._id)}
            className="justify-center self-end px-2.5 py-2 mt-16 text-xs font-medium text-white bg-sky-700 rounded-md max-md:px-5 max-md:mt-10"
          >
            Submit Application
          </button>
        </form>
      </section>
    </section>
  );
}

export default ApplyJob;
