import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import ViewJob from "../modals/view_job";
import ApplyJob from "../modals/apply_job";


function Tag({ text }) {
  return (
    <div className="justify-center px-2.5 py-2 rounded-2xl bg-neutral-200">
      {text}
    </div>
  );
}

function Job({ jobs }) {
  const [view, setView] = useState(false);
  const [apply, setApply] = useState(false);
  const [job, setJob] = useState(null);

  const toggleView = (e) => {
    setJob(e);
    setView(!view);
  };
  
  const toggleApply = (e) => {
    setJob(e);
    setApply(!apply);
  };

  const closeBtn = (
    <button className="close" onClick={toggleView} type="button">
      &times;
    </button>
  );
  const closeBtnApply = (
    <button className="close" onClick={toggleApply} type="button">
      &times;
    </button>
  );

  
  return (
    <>
      {jobs.map((e) => {
        return (
          <div className="ml-4 mb-4" key={e._id}>
            <section className="flex flex-col px-3.5 py-5 font-medium bg-white rounded-md shadow max-w-[841px]">
              <img
                loading="lazy"
                src={e.image}
                alt="Profile Picture"
                className="ml-6 max-w-full aspect-[1.05] w-[105px] max-md:ml-2.5"
              />
              <p className="mt-6 text-sm text-zinc-700 max-md:max-w-full">
                {e.title}
              </p>
              <div className="flex gap-4 self-start mt- text-xs whitespace-nowrap text-neutral-500">
                <div className="flex items-center gap-0">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/add149b7c63063abcd33dc9de9b799c999132543206892b8efd386874ebdb2f1?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                    alt="Location"
                    className="shrink-0 w-5 mt-2 aspect-square"
                  />
                  <p className="mt-2">{e.location}</p>
                  <div className="flex items-center gap-1 mt-2">
                    <p className="ml-2">Active</p>
                    <li>{e.workType}</li>
                    {/* <li>Hybrid</li> */}
                  </div>
                </div>
              </div>

              <div className="flex gap-1.5 mt-5 max-w-full text-xs whitespace-nowrap text-stone-500 w-[270px]">
                {e.tags.map((x) => {
                  return <Tag text={x}  key={x}/>;
                })}
              </div>
              <p className="mt-9 border-black-400 border-b-2 text-sm text-neutral-600 max-md:max-w-full">
                {e.company}
              </p>

              <div className="flex gap-5 items-start mt-5 max-md:flex-wrap max-md:max-w-full">
                <button
                  onClick={() => {
                    setJob(e);
                    setApply(!apply);
                  }}
                  className="flex w-full sm:w-[700px]  grow shrink-0 justify-center items-center px-2.5 py-1 text-base text-white whitespace-nowrap bg-sky-600 rounded-md basis-0  max-md:px-5"
                >
                  <div className="flex gap-2.5">
                    {/* <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f4f74122f58b11e5650852525d368e20e88ba2c09a5f305c210307af23a351?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                      alt="Apply Icon"
                      className="shrink-0 w-6 aspect-square"
                    /> */}
                    <span>Apply</span>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setJob(e);
                    setView(!view);
                  }}
                  className="grow justify-center items-center px-4 py-2 text-xs rounded-md border border-solid border-neutral-400 text-neutral-400 w-fit max-md:px-5"
                >
                  View job
                </button>
              </div>
            </section>

            <div id="view-job">
              <Modal
                className="scrollable"
                isOpen={view}
                toggle={toggleView}
                // {...args}
              >
                <ModalHeader toggle={toggleView} close={closeBtn}></ModalHeader>
                <ModalBody>
                  <ViewJob  job={job} setView={setView} setApply={setApply}/>
                </ModalBody>
              </Modal>
            </div>
            <div id="apply-job">
              <Modal
                className="scrollable"
                isOpen={apply}
                toggle={toggleApply}
                // {...args}
              >
                <ModalHeader
                  toggle={toggleApply}
                  close={closeBtnApply}
                ></ModalHeader>
                <ModalBody>
                  <ApplyJob  job={job} setApply={setApply}/>
                </ModalBody>
              </Modal>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Job;
