import React, { useEffect, useState } from "react";
import Course from "./course";
import { request } from "../../services/utilities";

const Index = () => {
  const [courses, setCourses] = useState([])
  const fetchCourses = async () => {
    const url = `workshop/all`
    try{
      const rs = await request(url,'GET', true);
      setCourses(rs.data);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    fetchCourses()
  },[])
  return (
    <>
      <main className="flex flex-col w-[82%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col max-md:max-w-full">
          <section className="flex flex-col mt-3 px-4 max-w-full w-full">
            <h1 className="text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Workshop
            </h1>
            <p className="text-xs text-zinc-500 max-md:max-w-full">
              Access development tools here
            </p>
            <br/>
            <Course  courses={courses}/>
           
          </section>
        </div>
      </main>
    </>
  );
};

export default Index;
