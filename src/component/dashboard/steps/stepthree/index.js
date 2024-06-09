import React from "react";
import Experience from "./experience";

const Index = ({ handleStepClick, experienceArray, setExperienceArray }) => {
  return (
    <>
      <Experience
        handleStepClick={handleStepClick}
        experienceArray={experienceArray}
        setExperienceArray={setExperienceArray}
      />
    </>
  );
};

export default Index;
