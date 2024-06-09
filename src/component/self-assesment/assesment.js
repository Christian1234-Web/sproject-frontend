import { Link } from "react-router-dom";


function SelfAssessment() {
  return (
    <div className="flex flex-col mt-2.5 ml-5 max-w-full font-medium w-[897px]">
      <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">Self Assessment</h1>
      <p className="mt-2 text-xs text-zinc-500 max-md:max-w-full">Access Self Assesment tools here</p>
     <div className="flex justify-center">
     <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b70f8957acb0aa3184cb301ba45fafe9ce8f717fef38469372d2defacea05a8a?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
      alt="Descriptive alt text for the image"
      className="w-full   max-w-[338px]"
    />
     </div>
      <p className="self-center mt-9 text-sm text-neutral-700 max-md:max-w-full">
        Take a quick test to know how proficient you're as a UI/UX Designer
      </p>
      <Link to='/self-assesment-two' className="justify-center items-center self-center">
      <button className=" py-1 mt-14 max-w-full text-sm text-white bg-sky-600 rounded-md w-[315px] max-md:px-5 max-md:mt-10">
        Take Test
      </button>
      </Link>
      
    </div>
  );
}
export default SelfAssessment