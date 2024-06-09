import React from "react";
import Education from "./education";

const Index = ({ handleStepClick, educationArray, setEducationArray }) => {
  return (
    <>
      <Education
        handleStepClick={handleStepClick}
        educationArray={educationArray}
        setEducationArray={setEducationArray}
      />
    </>
  );
};

export default Index;
