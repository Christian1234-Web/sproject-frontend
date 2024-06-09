import React from "react";
import Experience from "./experience";
import Skill from "./skill";
import Other from "./other";
import JobType from "./job_type";

const Index = () => {
  return (
    <>
      <main className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 ml-28 max-w-full w-[495px]">
            <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Profile
            </h1>
            <p className="text-xs text-zinc-500 max-md:max-w-full">
              Manage your profile here
            </p>
            <br/>
            <br/>

            <Experience  title={'Experience'}/>
            <br/>
            <Experience  title={'Education'}/>
            <br/>
            <Skill />
            <br/>
            <JobType/>
            <br/>
            <Other/>
           
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
