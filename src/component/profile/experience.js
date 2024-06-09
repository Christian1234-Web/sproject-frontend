import React from 'react'

const Experience = ({title}) => {
  const experiences = [
    {
      company: "Company Name",
      role: "Role",
      duration: "2022-2025",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4235de5d6b16f5e287252d46a4f646adac9d6370d26832b13641540fcad2dba?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    },
    {
      company: "Company Name",
      role: "Role",
      duration: "2022-2025", 
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/40d1db65104736b53f80c94cd094c8b3abdcae88c8afb41583825e57d001ce8f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    },
    {
      company: "Company Name",
      role: "Role",
      duration: "2022-2025",
      logo: "https://cdn.builder.io/api/v1/image/assets/TEMP/94b2d7d1b86866f08eafbb8a42c67359b52826f24cbc2da39ae39e737a763267?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&",
    },
  ];
  function CompanyExperience({ company, role, duration, logo }) {
    return (
      <div className="flex gap-5 justify-between border-black-400 border-b-2  mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5">
          <img src={logo} alt={`${company} logo`} className="shrink-0 self-start w-6 aspect-[1.04]" />
          <div className="flex flex-col">
            <div className="font-semibold">{company}</div>
            <div className="mt-1.5 text-neutral-500">NNPC Company</div>
            <div className="mt-3 font-medium">{role}</div>
            <div className="mt-2.5 text-neutral-500">Lead UI UX Designer</div>
          </div>
        </div>
        <div className="my-auto font-medium">{duration}</div>
      </div>
    );
  }
  
  
  return (
    <>
 <section className="flex flex-col px-4 pt-6 pb-1.5 text-xs bg-white rounded-md shadow max-w-[495px] text-zinc-600">
      <h2 className="text-sm font-medium text-neutral-700 max-md:max-w-full">All {title}</h2>
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <CompanyExperience {...experience} />
          {index < experiences.length - 1 }
        </React.Fragment>
      ))}
    </section>
    </>
  )
}

export default Experience
