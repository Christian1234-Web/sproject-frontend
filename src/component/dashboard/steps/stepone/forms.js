import { useEffect, useState } from "react";
import { request } from "../../../../services/utilities";
import data from '../../../../data/countries-states.json';

function Form({
  linkedIn,
  setLinkedIn,
  country,
  setCountry,
  state,
  setState,
  profession,
  setProfession,
  skills,
  setSkills,
}) {
  const [countries,setCountries]= useState([])
  const [states,setStates]= useState([])


  const fetchCountry = () => {
   setCountries(data);
  };
  
  const fetchStatesByCountry = (e) => {
    setCountry(e);
    let countryData = data.find(
      (country) => country.name === e
    );
    let states_ = countryData ? countryData.states : [];
    setStates(states_);
  }
  

  useEffect(() => {
  fetchStatesByCountry(country);
    
}, [state]); 

useEffect(() => {
    fetchCountry();
}, []);
  return (
    <>
      <section className="">
        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            LinkedIn
          </label>
          <div className="justify-center items-start  pl-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
            <input
              type="url"
              id="linkedinInput"
              value={linkedIn}
              onChange={(e) => setLinkedIn(e.target.value)}
              placeholder="Enter link to your LinkedIn profile"
              aria-label="Enter link to your LinkedIn profile"
              className="w-full bg-transparent py-2 outline-none"
            />
          </div>
        </div>

        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Select Country
          </label>
          <div className="justify-center items-start py-2 pl-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
            <select
              className="w-full bg-transparent focus:outline-none"
              onChange={(e) => fetchStatesByCountry(e.target.value)}
              value={country}
            >
              <option>Select your country</option>

              {countries.map(e=>{
                return(
                  <option key={e.name}>{e.name}</option>

                )
              })}
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Select State
          </label>
          <div className="justify-center items-start  py-2 pl-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
            <select
              className="w-full bg-transparent focus:outline-none"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option>Select your state</option>
              {states.map(e=>{
                return(
                  <option key={e.name}> {e.name}</option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Profession
          </label>
          <div className="justify-center items-start  pl-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
            <input
              type="text"
              id="linkedinInput"
              value={profession}
              placeholder="Enter profession"
              onChange={(e) => setProfession(e.target.value)}
              className="w-full bg-transparent py-2 outline-none"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="linkedinInput" className=" text-xs text-gray-500">
            Skills
          </label>
          <div className="justify-center items-start  pl-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
            <input
              type="text"
              id="linkedinInput"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Enter skills"
              className="w-full bg-transparent py-2 outline-none"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Form;
