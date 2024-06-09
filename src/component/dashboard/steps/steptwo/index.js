import React from "react";
import JobType from "./job_type";

const Index = ({
  handleStepClick,
  jobType,
  setJobType,
  plevel,
  setPlevel,
  experience,
  setExperience,
  currency,
  setCurrency,
  frequency,
  setFrequency,
  rate,
  setRate,
}) => {
  return (
    <>
      <JobType
        handleStepClick={handleStepClick}
        jobType={jobType}
        setJobType={setJobType}
        plevel={plevel}
        setPlevel={setPlevel}
        experience={experience}
        setExperience={setExperience}
        currency={currency}
        setCurrency={setCurrency}
        frequency={frequency}
        setFrequency={setFrequency}
        rate={rate}
        setRate={setRate}
      />
    </>
  );
};

export default Index;
