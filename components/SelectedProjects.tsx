import React, { FunctionComponent } from "react";
import Link from "next/link";
import userData from "../constants/data";

const SelectedProjects: FunctionComponent = () => {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Selected Projects
          </h1>
          {/* View All button */}
          <Link href="/projects">
            <a className="hidden md:flex mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View All</p>
            </a>
          </Link>
        </header>
        {/* Project Card */}
        <a href="https://github.com/LihingMan/cube-configurator">
          <div className="bg-gray-900 dark:bg-[#000000] relative overflow-hidden">
            <h1 className="pl-5 pt-5 text-gray-50 font-bold px-2">
              Cabinet Configurator Web-App Plugin
            </h1>
            <img
              src={userData.ezbo}
              alt="web"
              className="transform hover:scale-125 transition duration-2000 ease-out mx-auto w-1/2 pt-5 pb-5"
            />
            <h1 className="left-10 text-gray-400 text-lg pl-5 pb-5">01</h1>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SelectedProjects;
