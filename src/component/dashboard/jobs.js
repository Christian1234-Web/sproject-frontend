import * as React from "react";
import { Link } from "react-router-dom";

function JobCard({job}) {
  return (
    <section className="flex w-full flex-col grow px-3.5 pt-9 pb-3 rounded-lg border border-solid border-zinc-400 max-md:mt-10">
      <img
        loading="lazy"
        src={job.image}
        alt={job.title}
        className="max-w-full aspect-[1.05] w-[105px]"
      />
      <h2 className="mt-10 text-sm font-medium text-zinc-700">{job.title}</h2>
      <div className="flex gap-4 text-xs whitespace-nowrap text-neutral-500">
        <div className="flex gap-0 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/add149b7c63063abcd33dc9de9b799c999132543206892b8efd386874ebdb2f1?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
            alt="Country flag"
            className="shrink-0 w-5 aspect-square"
          />
          <span>{job.location}</span>
        </div>
        <div className="flex gap-4 self-start mt-2">
            <span >Active</span>
            <span >{job.workType}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3.5 text-xs whitespace-nowrap text-stone-500 max-md:pr-5">
        {job.tags.map((tag, i) => (
          <span
            key={i}
            className="justify-center px-2.5 py-2 rounded-2xl bg-neutral-200"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <hr className="mt-3 mb-2" />
      <div className="flex gap-5 justify-between mt-2 font-medium">
        <Link to={'/jobs'} className="flex gap-1 no-underline justify-cente items-center text-center px-2 py-1 text-xs text-white whitespace-nowrap bg-sky-600 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f4f74122f58b11e5650852525d368e20e88ba2c09a5f305c210307af23a351?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
            alt=""
            className="shrink-0 w-4 aspect-square no-underline"
          />
          {'Apply'}
        </Link>
        <Link to={'/jobs'} className="justify-center no-underline  px-2 py-2 text-xs rounded-md border border-solid border-neutral-400 text-neutral-400 max-md:px-5">
          {"View Job"}
        </Link>
      </div>
    </section>
  );
}

function Jobs({jobs}) {
  

  return (
    <main className="pt-4 pr-7 mb-5 pl-2 bg-white rounded-md shadow max-w-[657px] max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        {jobs.slice(0,2).map(e=>{
          return(
            <JobCard key={e._id} job={e} />
          )
        })}
      </div>
    </main>
  );
}

export default Jobs;
