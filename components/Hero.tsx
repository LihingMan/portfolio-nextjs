import React, { FunctionComponent } from "react";
import userData from "../constants/data";

const Hero: FunctionComponent = () => {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text div */}
      <div className="w-full mx-auto text-center md:text-left md:w-1/2 lg:p-20">
        <h1 className="text-4xl md:text-9xl font-bold text-gray-700 dark:text-gray-200">
          Developer.
        </h1>
        <h1 className="text-4xl md:text-9xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Brewer.
        </h1>
        <h1 className="text-4xl md:text-9xl font-bold text-gray-700 dark:text-gray-200 my-2">
          Gamer.
        </h1>
      </div>

      {/* Image div */}
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-2/3">
          <img src={userData.heroImgUrl} alt="heroimg" className="shadow" />
          <div className="flex flex-row justify-between mt-4">
            <p className="font-sans text-xl">↑ Saya tu kio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
