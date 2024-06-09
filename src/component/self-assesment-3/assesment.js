import { Link } from "react-router-dom";
import SSRStorage from "../../services/storage";
import { useEffect, useState } from "react";
import { ASSSESMENT_COOKIE } from "../../services/constants";
const storage = new SSRStorage();

function SelfAssessment() {
const [text,setText] = useState('');
  useEffect(()=>{
    async function fetchSCore(){
      const score = await storage.getItem(ASSSESMENT_COOKIE);
      if(score?.Intermediate >= 3 || score?.Professional >= 3 || score?.Experience >= 3){
        setText('Congratulations! You are proficient with computer programming.')
      }
    }
    fetchSCore()
  },[]);
  return (
    <div className="flex flex-col mt-2.5 ml-5 max-w-full font-medium w-[897px]">
      <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
        Self Assessment
      </h1>
      <p className="mt-2 text-xs text-zinc-500 max-md:max-w-full">
        Access Self Assesment tools here
      </p>
      <div className="flex justify-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5264ea6f06f740695cb7b908b33050a9b5e80bcdec26b852484cd1fd93012c4f?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
          alt=""
          className="w-full aspect-[1.01] max-w-[377px]"
        />
      </div>
      <p className="self-center mt-9 text-sm text-neutral-700 max-md:max-w-full">
       {text}
      </p>
      <Link to='/self-assesment-two' className="justify-center items-center self-center">
      {/* <button className="justify-center items-center self-center py-1 mt-8 max-w-full text-sm text-white bg-sky-600 rounded-md w-[315px] max-md:px-5 max-md:mt-10">
        Take Test
      </button> */}
      </Link>
      
    </div>
  );
}
export default SelfAssessment;
