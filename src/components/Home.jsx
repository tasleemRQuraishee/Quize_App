// Home.js
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Home = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStartQuiz = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/quiz");
      setLoading(false);
    }, 3000);
  };

  return (
    <section className="lg:w-9/12 md:w-[90%] w-[95%] mx-auto mt-12 flex flex-col md:flex-row-reverse justify-between items-center" id="rulesContainer">
      {loading && <Loading />}

      <div className="md:w-1/2 w-full">
        <img src="/images/banner.png" alt="banner" className="w-full h-max rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500" />
      </div>

      <div className="md:w-1/2 w-full">
        <h1 className="my-8 lg:text-4xl text-3xl md:w-4/6 font-medium text-[#333] lg:leading-normal leading-normal mb-3">
          Learn new concepts for each question
        </h1>
        <p className="border-l-4 pl-2 py-2 mb-6 text-gray-500">
          We help you prepare for exams and quizzes{" "}
        </p>
        <div className="text-lg font-medium flex flex-col sm:flex-row gap-5">
          <button
            onClick={handleStartQuiz}
            className={`bg-blue-500 text-black py-2 px-4 rounded hover:text-white transition-colors duration-200 hover:scale-105 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            id="startQuiz"
            type="button"
            disabled={loading}
          >
            {loading ? "Loading..." : "Start Quiz"}
          </button>

          <button
            className="inline-flex items-center bg-yellow-500 text-black py-2 px-4 rounded hover:text-white transition-colors duration-200 hover:scale-105 ml-3"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
            know more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
