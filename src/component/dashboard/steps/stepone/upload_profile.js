import React, { useState } from "react";
import { uploadFile } from "../../../../services/utilities";

const ProgressBarF = () => (
  <div className="flex gap-2 mt-14 text-sm w-[90%] font-medium whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mt-10 ">
    <div className="shrink-0 my-auto max-w-full bg-sky-600 rounded-lg h-[7px] w-full" />
    <div>100%</div>
  </div>
);

const ProgressBar = () => (
  <div className="flex gap-2 mt-14 text-sm w-[90%] font-medium whitespace-nowrap text-neutral-500 max-md:flex-wrap max-md:mt-10 ">
    <div className="shrink-0 my-auto max-w-full bg-gray-200 rounded-lg h-[7px] w-full" />
  </div>
);

const ProfileImageUploadForm = ({handleUploadProfileImaage}) => (
  <form className="flex justify-center items-center px-16 py-8 w-full font-semibold rounded-lg border-2 border-solid bg-sky-600 bg-opacity-10 border-neutral-300 max-w-[745px] max-md:px-5 max-md:max-w-full">
    <div className="flex text-center flex-col max-w-full ">
      <label className="ml-7 text-sm leading-3 text-neutral-700 max-md:ml-2.5">
        Upload profile picture here
      </label>
      <div className="mt-1.5 text-xs font-medium text-zinc-500">
        Click the button below to upload your profile picture
      </div>
      <label htmlFor="uploadProfileImage">
        <button
          type="button"
          className="justify-center self-center px-2.5 py-2 mt-6 text-xs text-white bg-sky-700 rounded-md max-md:px-5"
          onClick={() => {
            document.getElementById("uploadProfileImage").click();
          }}
        >
          Click to upload
        </button>
      </label>
      <input type="file" id="uploadProfileImage" hidden onChange={e=>handleUploadProfileImaage(e.target.files[0])} />
    </div>
  </form>
);

const ActionButtons = ({ handleStepClick }) => (
  <div className="flex gap-5 justify-between self-stretch mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <button
      type="button"
      className="justify-center px-4 py-2 text-xs font-medium rounded-md border border-solid border-zinc-300 text-zinc-400 max-md:px-5"
    >
      Save to draft
    </button>
    <div className="flex gap-2 whitespace-nowrap">
      <button
        type="button"
        className="justify-center px-4 py-2 text-xs font-medium rounded-md border border-solid border-zinc-300 text-zinc-400 max-md:px-5"
      >
        Cancel
      </button>
      <button
        onClick={() => handleStepClick(1)}
        type="button"
        className="justify-center px-2.5 py-1 text-xs font-semibold text-white bg-sky-700 rounded-md"
      >
        Next
      </button>
    </div>
  </div>
);

const UploadProfile = ({ profileImage, setProfileImage, handleStepClick }) => {
  const [show, setShow] = useState(false);

  const handleUploadProfileImaage = async (file) => {
    console.log('sshdsj')
    try {
      const rs = await uploadFile(file);
      if(rs === undefined)return
      setProfileImage(rs);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="flex flex-col  items-center px-6 py-9 bg-white rounded-3xl border border-solid border-zinc-400  max-md:px-5">
      <ProfileImageUploadForm handleUploadProfileImaage={handleUploadProfileImaage} />
      {show === true ? <ProgressBarF /> : <ProgressBar />}
      <ActionButtons handleStepClick={handleStepClick} />
    </section>
  );
};

export default UploadProfile;
