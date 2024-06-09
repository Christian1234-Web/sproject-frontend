import * as React from "react";

function Badge({ children }) {
  return (
    <div className="justify-center px-3 py-2 text-xs whitespace-nowrap rounded-2xl bg-neutral-200 text-stone-500">
      {children}
    </div>
  );
}

function BadgeGroup({ items }) {
  return (
    <div className="flex gap-1.5 mt-1.5">
      {items.map((item, index) => (
        <Badge key={index}>{item}</Badge>
      ))}
    </div>
  );
}

function JobType() {
  const jobTypes = ["Remote", "Hybrid","Remote","Internships"];
  const experienceLevels = ["Intern", "Entry Level"];

  return (
    <section className="flex flex-col items-start pt-6 pr-20 pb-12 pl-3 bg-white rounded-md shadow max-w-[495px] max-md:pr-5">
      <div className="flex gap-1.5 items-start">
        <div className="flex flex-col self-stretch">
          <h2 className="text-sm font-medium text-neutral-700">Job Types</h2>
          <BadgeGroup items={jobTypes} />
        </div>
      </div>
      <h2 className="mt-5 text-sm font-medium text-neutral-700">
        Experience Level
      </h2>
      <BadgeGroup items={experienceLevels} />
    </section>
  );
}
export default JobType