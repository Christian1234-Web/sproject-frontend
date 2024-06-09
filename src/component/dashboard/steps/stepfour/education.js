const ActionButtons = ({ handleStepClick, handleSave }) => (
  <div className="flex gap-5 justify-between self-stretch mt-12 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
    <button
      type="button"
      onClick={handleSave}
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
        onClick={() => handleStepClick(4)}
        type="button"
        className="justify-center px-2.5 py-1 text-xs font-semibold text-white bg-sky-700 rounded-md"
      >
        Next
      </button>
    </div>
  </div>
);

function Education({ handleStepClick, educationArray, setEducationArray }) {
  const years = [
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
    "2009",
    "2008",
    "2007",
    "2006",
    "2005",
    "2004",
    "2003",
    "2002",
    "2001",
    "2000",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleChange = (index, field, value) => {
    setEducationArray((prevForms) => {
      const newForms = [...prevForms];
      newForms[index][field] = value;
      return newForms;
    });
  };

  const handleAddForm = () => {
    setEducationArray((prevForms) => [
      ...prevForms,
      {
        schoolName: "",
        degree: "",
        fieldOfStudy: "",
        grade: "",
        startYear: "",
        startMonth: "",
        endYear: "",
        endMonth: "",
        currentlyWork: false,
      },
    ]);
  };

  const handleRemoveForm = (indexToRemove) => {
    setEducationArray((prevForms) =>
      prevForms.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleSave = () => {
    // console.log(educationArray);
    // Implement save logic here
  };

  return (
    <div className="bg-slate-50">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <main className="flex flex-col items-start px-9 max-md:px-5 max-md:max-w-full">
            <section className="self-stretch text-sm font-semibold text-neutral-600 max-md:max-w-full">
              Education
            </section>
            <section className="self-stretch text-xs text-zinc-500 max-md:max-w-full">
              Add your education here
            </section>
           
            {educationArray.map((form, index) => (
              <form key={index} className="w-full max-md:flex-wrap">
                <div className="mb-2">
                  <label
                    htmlFor={`school-name-${index}`}
                    className="text-xs text-gray-500"
                  >
                    School Name
                  </label>
                  <div className="justify-center items-start py-1 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
                    <input
                      id={`school-name-${index}`}
                      type="text"
                      value={form.schoolName}
                      onChange={(e) =>
                        handleChange(index, "schoolName", e.target.value)
                      }
                      placeholder="Enter school name"
                      className="w-full bg-transparent py-1 pl-2 outline-none"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor={`degree-${index}`}
                    className="text-xs text-gray-500"
                  >
                    Degree
                  </label>
                  <div className="justify-center items-start py-1 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
                    <input
                      id={`degree-${index}`}
                      type="text"
                      value={form.degree}
                      onChange={(e) =>
                        handleChange(index, "degree", e.target.value)
                      }
                      placeholder="Enter company degree"
                      className="w-full bg-transparent py-1 pl-2 outline-none"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor={`field-of-study-${index}`}
                    className="text-xs text-gray-500"
                  >
                    Field Of Study
                  </label>
                  <div className="justify-center items-start py-1 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
                    <input
                      id={`field-of-study-${index}`}
                      type="text"
                      value={form.fieldOfStudy}
                      onChange={(e) =>
                        handleChange(index, "fieldOfStudy", e.target.value)
                      }
                      placeholder="Enter your field of study"
                      className="w-full bg-transparent py-1 pl-2 outline-none"
                    />
                  </div>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor={`grade-${index}`}
                    className="text-xs text-gray-500"
                  >
                    Grade
                  </label>
                  <div className="justify-center items-start py-1 text-xs font-medium rounded-md border border-solid  max-md:pr-5">
                    <input
                      id={`grade-${index}`}
                      type="text"
                      value={form.grade}
                      onChange={(e) =>
                        handleChange(index, "grade", e.target.value)
                      }
                      placeholder="Enter your grade"
                      className="w-full bg-transparent py-1 pl-2 outline-none"
                    />
                  </div>
                </div>
                <fieldset className="flex justify-between gap-5 mt-6 max-w-full text-sm font-medium text-zinc-500 w-[855px] max-md:flex-wrap">
                  <div className="flex flex-1 gap-5">
                    <div className="mb-2">
                      <label
                        htmlFor={`startYear-${index}`}
                        className="text-xs text-gray-500"
                      >
                        Start Year
                      </label>
                      <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                        <select
                          id={`startYear-${index}`}
                          value={form.startYear}
                          onChange={(e) =>
                            handleChange(index, "startYear", e.target.value)
                          }
                          className="w-full text-gray-500 bg-transparent"
                        >
                          <option value="">Select start year</option>
                          {years.map((year, i) => (
                            <option key={i} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor={`startMonth-${index}`}
                        className="text-xs text-gray-500"
                      >
                        Start Month
                      </label>
                      <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                        <select
                          id={`startMonth-${index}`}
                          value={form.startMonth}
                          onChange={(e) =>
                            handleChange(index, "startMonth", e.target.value)
                          }
                          className="w-full text-gray-500 bg-transparent"
                        >
                          <option value="">Select start month</option>
                          {months.map((month, i) => (
                            <option key={i} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="mb-2">
                      <label
                        htmlFor={`endYear-${index}`}
                        className="text-xs text-gray-500"
                      >
                        End Year
                      </label>
                      <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                        <select
                          id={`endYear-${index}`}
                          value={form.endYear}
                          onChange={(e) =>
                            handleChange(index, "endYear", e.target.value)
                          }
                          className="w-full text-gray-500 bg-transparent"
                        >
                          <option value="">Select end year</option>
                          {years.map((year, i) => (
                            <option key={i} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label
                        htmlFor={`endMonth-${index}`}
                        className="text-xs text-gray-500"
                      >
                        End Month
                      </label>
                      <div className="justify-center items-start py-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
                        <select
                          id={`endMonth-${index}`}
                          value={form.endMonth}
                          onChange={(e) =>
                            handleChange(index, "endMonth", e.target.value)
                          }
                          className="w-full text-gray-500 bg-transparent"
                        >
                          <option value="">Select end month</option>
                          {months.map((month, i) => (
                            <option key={i} value={month}>
                              {month}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <div className="mt-5 flex items-center text-xs text-zinc-500 max-md:ml-2.5">
                  <label
                    className="my-auto ml-3"
                    htmlFor={`currentWork-${index}`}
                  >
                    Currently working here
                  </label>
                  <input
                    id={`currentWork-${index}`}
                    type="checkbox"
                    checked={form.currentlyWork}
                    onChange={(e) =>
                      handleChange(index, "currentlyWork", e.target.checked)
                    }
                    className="shrink-0 rounded border border-solid border-zinc-400 h-[15px] w-[20px]"
                  />
                  <div></div>
                </div>
                <hr className="w-full mt-3" />
                {index !== 0 && (
                  <button
                    type="button"
                    className="flex float-right gap-1  text-xs text-red-600 max-md:mt-10 max-md:ml-2.5"
                    onClick={() => handleRemoveForm(index)}
                  >
                    <span style={{ fontSize: "25px" }}>-</span>
                    <div className="my-auto">Remove Education</div>
                  </button>
                )}
              </form>
            ))}
            <button
              className="flex gap-1  ml-7 text-xs text-sky-600 max-md:mt-10 max-md:ml-2.5"
              onClick={handleAddForm}
              type="button"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4fa37bdbd8cbd72848f2f18168d0a9aadf60747f133b00cabf7a3f7433600099?apiKey=090fe2b7543f4078be1f7ae4ac6ff07a&"
                alt="Add Experience Icon"
                className="shrink-0 w-6 aspect-square"
              />
              <div className="my-auto">Add Education</div>
            </button>
            <div className="w-full max-md:flex-wrap">
              <ActionButtons
                handleStepClick={handleStepClick}
                handleSave={handleSave}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Education;
