import React, { useState } from 'react';

const MultiForm = () => {
  const [forms, setForms] = useState([
    {
      startYear: '',
      startMonth: '',
      endYear: '',
      endMonth: '',
      company: '',
      domain: '',
      role: '',
      currentlyWork: false
    }
  ]);

  const handleChange = (index, field, value) => {
    setForms(prevForms => {
      const newForms = [...prevForms];
      newForms[index][field] = value;
      return newForms;
    });
  };

  const handleAddForm = () => {
    setForms(prevForms => [...prevForms, {
      startYear: '',
      startMonth: '',
      endYear: '',
      endMonth: '',
      company: '',
      domain: '',
      role: '',
      currentlyWork: false
    }]);
  };

  const handleRemoveForm = (indexToRemove) => {
    setForms(prevForms => prevForms.filter((_, index) => index !== indexToRemove));
  };

  const handleSave = () => {
    console.log(forms);
    // Implement save logic here
  };

  const years = [
    "2025", "2024", "2023", "2022", "2021", "2020",
    "2019", "2018", "2017", "2016", "2015", "2014"
  ];

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div>
      {forms.map((form, index) => (
        <form key={index} className="w-full max-md:flex-wrap">
          <fieldset className="flex justify-between gap-5 mt-6 max-w-full text-sm font-medium text-zinc-500 w-[855px] max-md:flex-wrap">
            <div className="flex flex-1 gap-5">
              <div className="mb-2">
                <label htmlFor={`startYear-${index}`} className="text-xs text-gray-500">Start Year</label>
                <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                  <select
                    id={`startYear-${index}`}
                    value={form.startYear}
                    onChange={(e) => handleChange(index, 'startYear', e.target.value)}
                    className="w-full text-gray-500 bg-transparent"
                  >
                    <option value="">Select start year</option>
                    {years.map((year, i) => (
                      <option key={i} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`startMonth-${index}`} className="text-xs text-gray-500">Start Month</label>
                <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                  <select
                    id={`startMonth-${index}`}
                    value={form.startMonth}
                    onChange={(e) => handleChange(index, 'startMonth', e.target.value)}
                    className="w-full text-gray-500 bg-transparent"
                  >
                    <option value="">Select start month</option>
                    {months.map((month, i) => (
                      <option key={i} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="mb-2">
                <label htmlFor={`endYear-${index}`} className="text-xs text-gray-500">End Year</label>
                <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                  <select
                    id={`endYear-${index}`}
                    value={form.endYear}
                    onChange={(e) => handleChange(index, 'endYear', e.target.value)}
                    className="w-full text-gray-500 bg-transparent"
                  >
                    <option value="">Select end year</option>
                    {years.map((year, i) => (
                      <option key={i} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-2">
                <label htmlFor={`endMonth-${index}`} className="text-xs text-gray-500">End Month</label>
                <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                  <select
                    id={`endMonth-${index}`}
                    value={form.endMonth}
                    onChange={(e) => handleChange(index, 'endMonth', e.target.value)}
                    className="w-full text-gray-500 bg-transparent"
                  >
                    <option value="">Select end month</option>
                    {months.map((month, i) => (
                      <option key={i} value={month}>{month}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="mb-2">
            <label htmlFor={`company-${index}`} className="text-xs text-gray-500">Company Name</label>
            <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
              <input
                id={`company-${index}`}
                type="text"
                value={form.company}
                onChange={(e) => handleChange(index, 'company', e.target.value)}
                placeholder="Enter company name"
                className="w-full bg-transparent py-2 outline-none"
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor={`domain-${index}`} className="text-xs text-gray-500">Company Domain</label>
            <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
              <input
                id={`domain-${index}`}
                type="text"
                value={form.domain}
                onChange={(e) => handleChange(index, 'domain', e.target.value)}
                placeholder="Enter company domain"
                className="w-full bg-transparent py-2 outline-none"
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor={`role-${index}`} className="text-xs text-gray-500">Role</label>
            <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
              <input
                id={`role-${index}`}
                type="text"
                value={form.role}
                onChange={(e) => handleChange(index, 'role', e.target.value)}
                placeholder="Enter your role"
                className="w-full bg-transparent py-2 outline-none"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center text-xs text-zinc-500 max-md:ml-2.5">
            <label className="my-auto ml-3" htmlFor={`currentWork-${index}`}>
              Currently working here
            </label>
            <input
              id={`currentWork-${index}`}
              type="checkbox"
              checked={form.currentlyWork}
              onChange={(e) => handleChange(index, 'currentlyWork', e.target.checked)}
              className="shrink-0 rounded border border-solid border-zinc-400 h-[20px] w-[25px]"
            />
            <div></div>
          </div>
          <hr className="w-full mt-3" />
          {index !== 0 && (
            <button onClick={() => handleRemoveForm(index)} className="text-red-500 px-4 py-2 rounded mt-4">Remove</button>
          )}
        </form>
      ))}
      <button onClick={handleAddForm} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add Form</button>
      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Save</button>
    </div>
  );
};

export default MultiForm;
