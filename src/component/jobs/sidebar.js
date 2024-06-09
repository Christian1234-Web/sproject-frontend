import * as React from "react";

function JobTypeOption({ data, handleFilterJobType }) {
  return (
    <div className="flex gap-1 mt-2 text-xs text-zinc-500">
      <input
        type="radio"
        onClick={() => handleFilterJobType(data._id)}
        name="jobType"
        className="shrink-0 rounded border border-solid border-zinc-400 h-[17px] w-[17px]"
      />
      <div className="flex-auto">{data.name}</div>
    </div>
  );
}

function ProfessionalLevelOption({ data, handleFilterJobsByLevel }) {
  return (
    <div className="flex gap-1 mt-3 text-xs text-zinc-500">
      <input
        type="radio"
        onClick={() => handleFilterJobsByLevel(data._id)}
        name="prof_level"
        className="shrink-0 rounded border border-solid border-zinc-400 h-[17px] w-[17px]"
      />
      <div className="flex-auto my-auto">{data.name}</div>
    </div>
  );
}

function Sidebar({
  jobTypes,
  professionalLevels,
  handleFilterJobType,
  handleFilterJobsByLevel,
}) {
  return (
    <section className="flex flex-col px-3.5 pt-5 pb-20 bg-white rounded-none shadow-sm max-w-[212px]">
      <div className="text-xs font-medium text-neutral-500">Job Type</div>
      {jobTypes.map((type, index) => (
        <JobTypeOption
          key={index}
          data={type}
          handleFilterJobType={handleFilterJobType}
        />
      ))}

      <div className="mt-6 text-xs font-medium text-neutral-500">
        Professional Level
      </div>
      {professionalLevels.map((level, index) => (
        <ProfessionalLevelOption
          key={index}
          data={level}
          handleFilterJobsByLevel={handleFilterJobsByLevel}
        />
      ))}
    </section>
  );
}

export default Sidebar;
