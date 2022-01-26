import React, { FunctionComponent } from "react";
import userData from "../constants/data";

const AboutMe: FunctionComponent = () => {
  return (
    <div className="light:bg-white">
      {/* Title */}
      <div className="max-w-6xl mx-auto h-48 light:bg-white">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me
        </h1>
      </div>
      {/* Description */}
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p className="leading-loose text-2xl md:text-4xl font-semibold mx-4">
            I am a backend developer with industry experience building websites
            and web applications. I specialise in Python and JavaScript,
            particularly with the Django and Node.js frameworks coupled with
            MongoDB or PostgreSQL.
          </p>
        </div>
      </div>
      {/* Content Columns */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="pt-5 text-gray-700 dark:text-gray-200">
                For any sort of opportunities / enquiry,{" "}
                <a
                  href={`mailto:${userData.email}`}
                  className="font-bold underline"
                >
                  email
                </a>{" "}
                me, and I'll get back to you ASAP.
              </p>
            </div>
            <div className="pt-10">
              <h1 className="text-xl font-bold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="pt-5 text-gray-700 dark:text-gray-200">
                Current I am open to new job opportunities in backend
                development. Take a look at my{" "}
                <a href={userData.resumeUrl} className="font-bold underline">
                  CV
                </a>{" "}
                and don't hesitate to contact me if I'm a good fit for your
                role!
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            {/* Description area */}
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              {userData.about.title}
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              {userData.about.description[0]}
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              {userData.about.description[1]}
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              {userData.about.description[2]}
            </p>

            {/* Tech stack */}
            <div className="inline-block pt-10">
              <h1 className="text-gray-50 text-xl md:text-3xl font-bold rounded-md px-2 py-1 bg-red-500">
                Tech Stack
              </h1>
            </div>
            <div className="pt-5 flex flex-row flex-wrap mt-5">
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
                className="w-20 h-20 px-1 py-1 mx-4 my-4 dark:bg-white"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
                className="w-20 h-20 px-1 py-1 mx-4 my-4 dark:bg-white"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="w-20 h-20 mx-4 my-4"
              />
            </div>
            <div className="pt-5 flex flex-row flex-wrap mt-5">
              <img
                src="https://raw.githubusercontent.com/github/explore/7456fdff59816d37ef383a6c8f32a26ff7332db2/topics/django/django.png"
                className="w-20 h-20 px-1 py-1 mx-4 my-4 dark:bg-white"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                className="w-20 h-20 px-1 py-1 mx-4 my-4 dark:bg-white"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
                className="w-20 h-20 mx-4 my-4"
              />
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
                className="w-20 h-20 mx-4 my-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
