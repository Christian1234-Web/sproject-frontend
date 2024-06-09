import * as React from "react";


const Checkbox = ({ label, handleJobTypeChange,jobType }) => (
  <div className="flex gap-1.5 mt-3.5 text-xs text-zinc-500">
    <input
      id="0"
      type="radio"
      name="radio_"
      value={label}
      checked={jobType === label ? true:false}
      onChange={handleJobTypeChange}
      className="shrink-0 rounded border border-solid border-zinc-400 h-[25px] w-[25px]"
    />
    <div className="my-auto">{label}</div>
  </div>
);

const RadioButton = ({ label,handlePlevelChange ,plevel}) => (
  <div className="flex gap-1.5 mt-3.5 text-xs text-zinc-500">
    <input
      type="radio"
      name="radio"
      value={label}
      checked={plevel === label ? true:false}

      onChange={handlePlevelChange}
      className="shrink-0 rounded-full border border-solid border-zinc-400 h-[25px] w-[25px]"
    />

    <div className="my-auto">{label}</div>
  </div>
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
        onClick={() =>handleStepClick(2)}
        type="button"
        className="justify-center px-2.5 py-1 text-xs font-semibold text-white bg-sky-700 rounded-md"
      >
        Next
      </button>
    </div>
  </div>
);
function JobType({
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
}) {

  const handleJobTypeChange = (e) => {
    setJobType(e.target.value);
  };

  const handlePlevelChange = (e) => {
    setPlevel(e.target.value);
  };

  return (
    <section className="flex flex-col items-start py-4 pr-12 pl-6 bg-white rounded-3xl border border-solid border-zinc-400 max-w-[928px] max-md:px-5">
      <h2 className="self-stretch text-sm font-medium text-neutral-600 max-md:max-w-full">
        Job Type
      </h2>
      <Checkbox label="Full Time" handleJobTypeChange={handleJobTypeChange} jobType={jobType} />
      <Checkbox label="Part Time" handleJobTypeChange={handleJobTypeChange} jobType={jobType} />
      <Checkbox label="Contract" handleJobTypeChange={handleJobTypeChange} jobType={jobType} />
      <Checkbox label="Internship" handleJobTypeChange={handleJobTypeChange} jobType={jobType}/>
      <Checkbox label="Remote" handleJobTypeChange={handleJobTypeChange} jobType={jobType}/>

      <h2 className="self-stretch mt-7 text-sm font-medium text-neutral-600 max-md:max-w-full">
        Professional Level
      </h2>
      <RadioButton label="Entry Level" handlePlevelChange={handlePlevelChange} plevel={plevel} />
      <RadioButton label="Junior Level" handlePlevelChange={handlePlevelChange} plevel={plevel} />
      <RadioButton label="Middle Level" handlePlevelChange={handlePlevelChange} plevel={plevel} />
      <RadioButton label="Senior Level" handlePlevelChange={handlePlevelChange} plevel={plevel} />
      <RadioButton label="Director Level" handlePlevelChange={handlePlevelChange} plevel={plevel} />
      <br />
      <div className="mb-2 w-full">
        <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
          Experience
        </label>
        <div className="justify-center w-full items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
          <select className="w-full  text-gray-500  bg-transparent focus:outline-none" onChange={e=>setExperience(e.target.value)} value={experience}>
            <option>Select experience level</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="above 10">above 10</option>

          </select>
        </div>
      </div>

      <form className="flex gap-5 justify-between mt-4 max-w-full font-medium whitespace-nowrap w-[424px] max-md:flex-wrap">
        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Currency
          </label>
          <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
            <select className="w-full  text-gray-500  bg-transparent focus:outline-none" onChange={e=>setCurrency(e.target.value)} value={currency}>
            <option value=''>Select currency</option>
              <option value='USD'>USD</option>
              <option value={'naira'}>Naira</option>

            </select>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Frequency
          </label>
          <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
            <select className="w-full  text-gray-500  bg-transparent focus:outline-none" onChange={e=>setFrequency(e.target.value)} value={frequency}>
            <option value=''>Select frequency</option>
              <option value={'annually'}>Annually</option>
              <option value={'mid year'}>Mid Year</option>
              <option value={'monthly'}>Monthly</option>
              <option value={'Weekly'}>Weekly</option>
              <option value={'Daily'}>Daily</option>
            </select>
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Rate
          </label>
          <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
            <select className="w-full  text-gray-500  bg-transparent focus:outline-none" onChange={e=>setRate(e.target.value)} value={rate}>
            <option value=''>Select rate</option>
              <option value={"50"} >50</option>
              <option value={"100"} >1000</option>
              <option value={"150"} >150</option>
              <option value={"200"} >200</option>
              <option value={"250"} >250</option>
              <option value={"300"} >300</option>
              <option value={"400"} >400</option>
              <option value={"500"} >500</option>
              <option value={"1000"} >1000</option>
            </select>
          </div>
        </div>
      </form>
      <br />
      <hr className="w-full" />
      <ActionButtons handleStepClick={handleStepClick} />
    </section>
  );
}

export default JobType;
