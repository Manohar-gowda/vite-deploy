import React from "react";
import CenteredContainer from "./CenteredContainer";
import Instructions from "./Instructions";

const MainContent = () => {
  return (
    <div className="grid grid-cols-2 gap-4 h-screen">
      <div className="flex items-center justify-center text-2xl">
        <div className="p-8 shadow-lg container border items-center bg-gray-600 m-4 w-[85%] h-[85%] rounded-lg text-white text-center space-y-5">
            <CenteredContainer/>
        </div>
      </div>
      <div className="flex items-center justify-center text-2xl">
        <div className="p-8 shadow-lg container border bg-gray-600 m-4 w-[85%] h-[85%] rounded-lg text-white space-y-5">
            <Instructions/>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
