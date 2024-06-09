
const Step = ({ number, label, active, onClick }) => (
  <div className="flex gap-3 whitespace-nowrap cursor-pointer" onClick={onClick}>
    <div className={`justify-center items-center pl-4 pt-2 text-base font-semibold rounded-full h-[38px] w-[38px] ${active ? 'text-sky-600 bg-sky-600 bg-opacity-20' : 'text-neutral-400 bg-zinc-400 bg-opacity-20'}`}>
      {number}
    </div>
    <div className={`my-auto text-sm font-medium ${active ? 'text-sky-600 text-opacity-60' : 'text-zinc-400'}`}>
      {label}
    </div>
  </div>
);

const Tab = ({activeStep,handleStepClick}) => {
 
  return (
    <section className="flex gap-5 justify-between py-2 pr-16 pl-2 bg-white border border-solid border-zinc-400 max-w-[987px] rounded-[30px] max-md:flex-wrap max-md:pr-5">
      <Step number="1" label="Information" active={activeStep === 0} onClick={() => handleStepClick(0)} />
      <Step number="2" label="Job preference" active={activeStep === 1} onClick={() => handleStepClick(1)} />
      <Step number="3" label="Experience" active={activeStep === 2} onClick={() => handleStepClick(2)} />
      <Step number="4" label="Education" active={activeStep === 3} onClick={() => handleStepClick(3)} />
      <Step number="5" label="Certifications" active={activeStep === 4} onClick={() => handleStepClick(4)} />
    </section>
  );
};

export default Tab;
