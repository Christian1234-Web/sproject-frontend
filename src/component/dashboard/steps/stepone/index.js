import React from "react";
import UploadResume from "./upload_resume";
import UploadProfile from "./upload_profile";
import Form from "./forms";

const Index = ({
  resume,
  setResume,
  linkedIn,
  setLinkedIn,
  country,
  setCountry,
  state,
  setState,
  profession,
  setProfession,
  skills,
  setSkills,
  profileImage,
  setProfileImage,
  handleStepClick
}) => {
  return (
    <>
      <div className="pl-4">
        <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
          Information
        </h1>
        <p className="text-xs text-zinc-500 max-md:max-w-full">
          Input Information about yourself
        </p>
      </div>
      <br />
      <UploadResume resume={resume} setResume={setResume} />
      <br />

      <Form
        linkedIn={linkedIn}
        setLinkedIn={setLinkedIn}
        country={country}
        setCountry={setCountry}
        state={state}
        setState={setState}
        profession={profession}
        setProfession={setProfession}
        skills={skills}
        setSkills={setSkills}
      />
      <br />
      <UploadProfile
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        handleStepClick={handleStepClick}
      />
      <br />
      <br />
    </>
  );
};

export default Index;
