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


const ResumeUploadForm = ({handleUploadResume}) => (
  <form className="flex justify-center items-center px-16 py-8 w-full font-semibold rounded-lg border-2 border-solid bg-sky-600 bg-opacity-10 border-neutral-300 max-w-[745px] max-md:px-5 max-md:max-w-full">
    <div className="flex text-center flex-col max-w-full ">
      <label className="ml-7 text-sm leading-3 text-neutral-700 max-md:ml-2.5">
        Upload resume here
      </label>
      <div className="mt-1.5 text-xs font-medium text-zinc-500">
        Click the button below to upload your resume
      </div>
      <label htmlFor="uploadResume">
        <button
          type="button"
          className="justify-center self-center px-2.5 py-2 mt-6 text-xs text-white bg-sky-700 rounded-md max-md:px-5"
          onClick={() => {
            document.getElementById("uploadResume").click();
          }}
        >
          Click to upload
        </button>
      </label>
      <input type="file" id="uploadResume" hidden  onChange={e=>handleUploadResume(e.target.files[0])}/>
    </div>
  </form>
);


const UploadResume = ({ resume, setResume }) => {
const [show,setShow] = useState(false);

  const handleUploadResume = async (file) => {
    try {
      const rs = await uploadFile(file);
      setResume(rs);
      setShow(true)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="flex flex-col  items-center px-6 py-9 bg-white rounded-3xl border border-solid border-zinc-400  max-md:px-5">
      <ResumeUploadForm  handleUploadResume={handleUploadResume}/>
      {show === true ?<ProgressBarF /> :<ProgressBar /> }
    </section>
  );
};

export default UploadResume;
