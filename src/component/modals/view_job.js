import * as React from "react";

function ImageWithAlt({ src, alt }) {
  return <img loading="lazy" src={src} alt={alt} className="shrink-0 w-5 aspect-square" />;
}

function RoleDetail({ label, value, imgSrc }) {
  return (
    <div className="flex gap-2.5 items-center self-start">
      {imgSrc && <img loading="lazy" src={imgSrc} alt="" className="shrink-0 self-stretch aspect-square w-[17px]" />}
      <div className="self-stretch my-auto">{label}</div>
      {value && <div className="self-stretch my-auto">{value}</div>}
    </div>
  );
}

function ViewJob({job,setView,setApply}) {
  return (
    <article className="flex flex-col pb-20 bg-white rounded-lg max-w-[691px] ">
      <img loading="lazy" src={job?.image} alt="" className="w-full aspect-[2] max-md:max-w-full" />
      
      <section className="flex flex-col px-9 mt-9 w-full max-md:px-5 max-md:max-w-full">
        <header className="text-base font-medium text-neutral-600 max-md:max-w-full">{job?.company}</header>
        <h1 className="mt-6 text-sm font-medium text-zinc-700 max-md:max-w-full">{job?.title}</h1>
      
        <div className="flex gap-4 self-start mt-3 text-xs text-neutral-500">
          <div className="flex gap-0 whitespace-nowrap">
            <ImageWithAlt src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e72f77112b5d7e8de284fd5b8bfd4b2b47cf8daee482e4d5281570dc5387a20?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="Nigeria" />
            <div>{job?.location}</div>
          </div>
          <div className="my-auto">Active</div>
          <div className="my-auto">{job?.workType}</div>
          <RoleDetail label="Hybrid" imgSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b12ae67eae22feb8accee532b986a1519f641a7bfcef2b77756acc8d2c9d4f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" value="12 hours ago" />
        </div>
        
        <section className="flex flex-col px-4 py-7 mt-8 bg-white rounded-md shadow max-md:max-w-full">
          <header className="border-black-400 border-b-2 pb-2 text-sm font-medium text-neutral-700 max-md:max-w-full">Role Details</header>
          
          <div className=" flex gap-2.5 self-start mt-5">
            <div className="flex flex-col items-center">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9337c67157ceb4c1683de14f451f0e382f88e315a457321eb1bc913c921f487?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="w-10 aspect-square" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ff2f30443dbdd232a795b51849f130b885989e16171217e651fb0fdf3ffe3fb?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="mt-4 w-10 aspect-square" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd989c1928e06b4936c1f85385bdb731f4f2c6b473af7587a03ae46a4fa7f36c?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="mt-4 w-10 aspect-square" />
            </div>
            <div className="flex flex-col my-auto text-xs text-neutral-500">
              <div>Application Deadline</div>
              <div className="mt-1.5 font-medium text-zinc-600">{new Date(job.deadline).toDateString()}</div>
              <div className="mt-7">Job posted on</div>
              <div className="mt-1.5 font-medium text-zinc-600">{new Date(job.createdAt).toDateString()}</div>
              <div className="mt-7">Work type</div>
              <div className="mt-1.5 font-medium text-zinc-600">{job.workType}</div>
            </div>
          </div>
          
          <div className="flex gap-2.5 self-start mt-4 text-xs whitespace-nowrap text-neutral-500">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/00292f892d757d76e7cf09ffa5b43d43f77fcb4b57c6b83c093d2c8ee5db5ad6?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="" className="shrink-0 w-10 aspect-square" />
            <div className="my-auto">Industry</div>
          </div>
        </section>
      
        <section>
          <h2 className="mt-6 text-sm font-medium text-neutral-700 max-md:max-w-full">Overview</h2>
          <p className="mt-2 text-xs text-neutral-500 max-md:max-w-full">About the Role:</p>
          <p className="mt-3.5 text-xs text-neutral-500 max-md:max-w-full">
           {job?.about}
          </p>
        </section>
      
        <section>
          <h2 className="mt-2.5 text-sm font-medium text-neutral-700 max-md:max-w-full">Requirements</h2>
          <div className="mt-2.5 text-xs text-neutral-500 max-md:max-w-full">
           <ul style={{listStyle:"circle"}}>
            {job?.requirement?.map(x=>{
              return(
                <li key={x}>{x}</li>
              )
            })}
           </ul>
          </div>
        </section>
        
        <div className="flex gap-2.5 justify-center self-start px-2.5 py-1 mt-8 text-base font-medium text-white whitespace-nowrap bg-sky-600 rounded-md max-md:px-5">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f4f74122f58b11e5650852525d368e20e88ba2c09a5f305c210307af23a351?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&" alt="Apply icon" className="shrink-0 w-6 aspect-square" />
          <button 
          onClick={() =>{
            setView(false)
            setApply(true)
          }}
          className=" text-sm text-white bg-sky-600 rounded-md w-[115px] max-md:px-5 max-md:mt-10">
            
            Apply</button>
        </div>
      </section>
    </article>
  );
}

export default ViewJob;