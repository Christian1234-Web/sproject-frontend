import * as React from "react";

function Form({certificateTitle,setCertificateTitle}) {
  
  return (
    <>
      <section className="">
        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Certificate Title
          </label>
          <div className="justify-center items-start  pl-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
            <input
              type="url"
              id="linkedinInput"
              placeholder="Enter certificate title"
              value={certificateTitle}
              onChange={e=> setCertificateTitle(e.target.value)}
              aria-label="Enter certificate title"
              className="w-full bg-transparent py-2 outline-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
