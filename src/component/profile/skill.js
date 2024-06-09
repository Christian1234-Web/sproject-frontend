import * as React from "react";

function SkillTag({ children }) {
  return (
    <div className="justify-center px-2.5 py-2 rounded-2xl bg-neutral-200">
      {children}
    </div>
  );
}

function SkillList() {
  const skills = ["Reactjs", "Phyton", "CC+", "Javascript"];

  return (
    <div className="flex gap-1.5 mt-4 max-w-full text-xs text-stone-500 w-[269px]">
      {skills.map((skill, index) => (
        <SkillTag key={index}>{skill}</SkillTag>
      ))}
    </div>
  );
}

function Skill() {
  return (
    <section className="flex flex-col items-start pt-5 pr-20 pb-14 pl-4 whitespace-nowrap bg-white rounded-md shadow max-w-[495px] max-md:pr-5">
      <h2 className="text-sm font-medium text-neutral-700">Skills</h2>
      <SkillList />
    </section>
  );
}
export default Skill;