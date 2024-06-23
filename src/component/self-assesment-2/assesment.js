import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../../services/utilities";
import SSRStorage from "../../services/storage";
import { ASSSESMENT_COOKIE } from "../../services/constants";
const storage = new SSRStorage();

const Question = ({
  index,
  questionTitle,
  questionText,
  options,
  answers,
  onSelectAnswer,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSelectAnswer = (optionLabel) => {
    setSelectedAnswer(optionLabel);
    onSelectAnswer(questionText, optionLabel);
  };

  return (
    <section
      className="flex flex-col items-start px-3 w-full pb-3 text-xs max-md:pr-5 max-md:max-w-full"
      style={{ borderBottom: "1px solid gray" }}
    >
      <h2 className="self-stretch text-sm mt-3 font-medium text-neutral-600 max-md:max-w-full">
        {index + 1}. {questionTitle}
      </h2>
      <h2 className="self-stretch text-sm mt-3 font-medium text-neutral-600 max-md:max-w-full">
        {questionText}:
      </h2>
      {options.map((option, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-5 mt-4 w-full "
        >
          <div className="flex items-center gap-2 my-auto ">
            <span className="font-medium text-zinc-700">{option.label}</span>
            <span className="text-zinc-500">{option.text}</span>
          </div>
          <div>
            <input
              type="radio"
              id={`${questionText}-${option.label}`}
              name={questionText}
              className="shrink-0 items-center ml-5 rounded border border-solid border-zinc-400 h-[15px] w-[15px]"
              onChange={() => handleSelectAnswer(option.label)}
            />
          </div>
        </div>
      ))}

      <div className="mt-3 w-full">
        <label htmlFor="linkedinInput" className="mb-2 text-xs text-gray-500">
          {/* Select */}
        </label>
        <div className="justify-center items-start py-2 pl-2 text-xs font-medium rounded-md border border-solid border-zinc-400  max-md:pr-5">
          <select
            className="w-full bg-transparent focus:outline-none"
            onChange={(e) => handleSelectAnswer(e.target.value)}
          >
            <option>Select...</option>
            {answers.map((e, index) => {
              return (
                <option key={index} value={e}>
                  {e}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </section>
  );
};

const SelfAssessment = () => {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  const handleSelectAnswer = (questionText, selectedAnswer) => {
    setSelectedAnswers((prevState) => ({
      ...prevState,
      [questionText]: selectedAnswer,
    }));
  };

  const handleNextButtonClick = async () => {
    const answerCount = {};
    Object.values(selectedAnswers).forEach((answer) => {
      answerCount[answer] = (answerCount[answer] || 0) + 1;
    });
    storage.setItem(ASSSESMENT_COOKIE, answerCount);
    console.log(answerCount);
    navigate("/self-assesment-three");
  };

  const fetchQuestions = async () => {
    const url = `assesment/all`;
    try {
      const rs = await request(url, "GET", true);
      setQuestions(rs.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const calculateSuitabilityMessage = (selectedAnswer) => {
    switch (selectedAnswer) {
      case "Experience":
      case "Professional":
        return "best suited";
      case "Intermediate":
        return "partially suited";
      case "Beginner":
        return "not best suited";
      default:
        return "";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct result message based on selected answers
    let message = '';

    questions.forEach((question) => {
      const selectedAnswer = selectedAnswers[question.question];
      if (selectedAnswer) {
        const suitability = calculateSuitabilityMessage(selectedAnswer);
        message += `You are ${suitability} for ${question.title}.`;
      }
    });

    // Update result message state
    console.log(message);
    // setResultMessage(message);
    storage.setItem(ASSSESMENT_COOKIE, message);

    // For demonstration, navigate to the next page
    navigate("/self-assesment-three");
  };

  return (
    <form className="flex flex-col pt-2 pb-2.5 bg-white rounded-md border border-solid border-zinc-400 max-w-[928px]">
      {questions.map((q, index) => (
        <Question
          key={index}
          index={index}
          questionTitle={q.title}
          questionText={q.question}
          options={q.options}
          answers={q.answerOptions}
          onSelectAnswer={handleSelectAnswer}
        />
      ))}
      <div className="flex mt-4 gap-2 self-end mr-6 whitespace-nowrap max-md:mr-2.5">
        <button className="justify-center px-4 py-1 text-sm font-medium rounded-md border border-solid border-zinc-300 text-zinc-400 max-md:px-5">
          Cancel
        </button>
        <button
          type="button"
          className="justify-center px-2.5 py-1 text-sm font-semibold text-white bg-sky-800 rounded-md max-md:px-5"
          onClick={handleSubmit}
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default SelfAssessment;
