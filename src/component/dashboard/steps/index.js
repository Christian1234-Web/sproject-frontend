import React, { useEffect, useState } from "react";
import Tab from "../tab";
import Notifier from "../notifier";
import StepOne from "./stepone";
import StepTwo from "./steptwo";
import StepThree from "./stepthree";
import StepFour from "./stepfour";
import StepFive from "./stepfive";
import SSRStorage from "../../../services/storage";
import { USER_COOKIE } from "../../../services/constants";
import { request } from "../../../services/utilities";
import { Notyf } from "notyf";
import { useNavigate } from "react-router-dom";
const storage = new SSRStorage();
const notyf = new Notyf();

const Index = () => {
  const navigate = useNavigate();
  const [profileId, setProfileId] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [profession, setProfession] = useState("");
  const [skills, setSkills] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [jobType, setJobType] = useState("");
  const [plevel, setPlevel] = useState("");
  const [experience, setExperience] = useState("");
  const [currency, setCurrency] = useState("");
  const [frequency, setFrequency] = useState("");
  const [rate, setRate] = useState("");
  const [experienceArray, setExperienceArray] = useState([
    {
      startYear: "",
      startMonth: "",
      endYear: "",
      endMonth: "",
      company: "",
      domain: "",
      role: "",
      currentlyWork: false,
    },
  ]);
  const [educationArray, setEducationArray] = useState([
    {
      schoolName: "",
      degree: "",
      fieldOfStudy: "",
      grade: "",
      startYear: "",
      startMonth: "",
      endYear: "",
      endMonth: "",
      currentlyWork: false,
    },
  ]);
  const [certificateTitle, setCertificateTitle] = useState("");
  const [certificateFile, setCertificateFile] = useState("");
  let isStepOneComplete = true;
  let isStepTwoComplete = true;
  let isStepThreeComplete = true;
  let isStepFourComplete = true;
  let isStepFiveComplete = true;

  const handleStepClick = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleUpdateProfile = async () => {
    setLoading(true);
    const url = `profile/update/${profileId}`;

    if (
      resume === "" ||
      linkedIn === "" ||
      country === "" ||
      state === "" ||
      profession === "" ||
      skills === "" ||
      profileImage === ""
    ) {
      isStepOneComplete = false;
    }
    if (
      jobType === "" ||
      plevel === "" ||
      experience === "" ||
      currency === "" ||
      frequency === "" ||
      rate === ""
    ) {
      isStepTwoComplete = false;
    }
    if (
      experienceArray[0].company === "" ||
      experienceArray[0].domain === "" ||
      experienceArray[0].role === "" ||
      experienceArray[0].startMonth === "" ||
      experienceArray[0].startYear === ""
    ) {
      isStepThreeComplete = false;
    }
    if (
      educationArray[0].schoolName === "" ||
      educationArray[0].degree === "" ||
      educationArray[0].fieldOfStudy === "" ||
      educationArray[0].grade == "" ||
      educationArray[0].startMonth === "" ||
      experienceArray[0].startYear === ""
    ) {
      isStepFourComplete = false;
    }

    if(certificateTitle === "" || certificateFile === ""){
      isStepFiveComplete = false;
    }
    const data = {
      resume,
      linkedIn,
      country,
      state,
      profession,
      skills,
      profilePic: profileImage,
      jobType,
      professionalLevel: plevel,
      experience,
      currencey: currency,
      frequency,
      rate,
      experienceArray,
      educationArray,
      certificateTitle,
      certificateFile,
      isStepOneComplete,
      isStepTwoComplete,
      isStepThreeComplete,
      isStepFourComplete,
      isStepFiveComplete
    };
    try {
      const rs = await request(url, "PUT", true, data);
      setLoading(false);

      if (rs.status === "SUCCESS") {
        notyf.success("Profile updated successfully");
        navigate("/dashboard");
      }
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  const fetchUserProfile = async () => {
    const user = await storage.getItem(USER_COOKIE);

    const url = `profile/user/${user.user._id}`;
    try {
      const rs = await request(url, "GET", true);

      if (rs.status === "SUCCESS") {
        const e = rs.data;
        setProfileId(e._id);
        if (e.experienceArray && e.experienceArray.length >= 1) {
          setExperienceArray(e.experienceArray);
        } else {
          setExperienceArray([
            {
              startYear: "",
              startMonth: "",
              endYear: "",
              endMonth: "",
              company: "",
              domain: "",
              role: "",
              currentlyWork: false,
            },
          ]);
        }

        if (e.educationArray && e.educationArray.length >= 1) {
          setEducationArray(e.educationArray);
        } else {
          setEducationArray([
            {
              schoolName: "",
              degree: "",
              fieldOfStudy: "", // corrected typo here
              grade: "",
              startYear: "",
              startMonth: "",
              endYear: "",
              endMonth: "",
              currentlyWork: false,
            },
          ]);
        }

        setResume(e.resume);
        setLinkedIn(e.linkedIn);
        setCurrency(e.currencey);
        setCountry(e.country);
        setState(e.state);
        setProfession(e.profession);
        setProfileImage(e.profilePic);
        setJobType(e.jobType);
        setPlevel(e.professionalLevel);
        setSkills(e.skills);
        setExperience(e.experience);
        setFrequency(e.frequency);
        setRate(e.rate);
        setCertificateTitle(e.certificateTitle);
        setCertificateFile(e.certificateFile);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchUserProfile();
  }, []);
  return (
    <>
      <main className="flex flex-col w-[90%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 px-4 max-w-full w-full">
            <Tab activeStep={activeStep} handleStepClick={handleStepClick} />
            <br />
            {activeStep === 0 && <Notifier />}
            <br />

            {activeStep === 0 && (
              <StepOne
                resume={resume}
                setResume={setResume}
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
                profileImage={profileImage}
                setProfileImage={setProfileImage}
                handleStepClick={handleStepClick}
              />
            )}
            {activeStep === 1 && (
              <StepTwo
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
            )}
            {activeStep === 2 && (
              <StepThree
                handleStepClick={handleStepClick}
                experienceArray={experienceArray}
                setExperienceArray={setExperienceArray}
              />
            )}
            {activeStep === 3 && (
              <StepFour
                handleStepClick={handleStepClick}
                educationArray={educationArray}
                setEducationArray={setEducationArray}
              />
            )}
            {activeStep === 4 && (
              <StepFive
                certificateTitle={certificateTitle}
                setCertificateTitle={setCertificateTitle}
                certificateFile={certificateFile}
                setCertificateFile={setCertificateFile}
                handleUpdateProfile={handleUpdateProfile}
                loading={loading}
              />
            )}

            <br />
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
