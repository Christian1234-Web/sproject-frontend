import React from "react";
import SelfAssessment from "./assesment";

const index = () => {
  return (
    <>
    <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 px-4 max-w-full w-[495px]">
          <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">Self Assessment</h1>
      <p className="mt-2 text-xs text-zinc-500 max-md:max-w-full">Access Self Assesment tools here</p>
            <br/>
    <main className="flex flex-col mt-2.5 max-w-full font-medium w-[897px]">
            <SelfAssessment />
      </main>
      </section>
      </div>
    </>
  );
};

export default index;
