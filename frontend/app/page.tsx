import React from "react";
import StationAutoComplete from "./components/StationAutoComplete";
import TimeSelector from "./components/TimeSelector";

const page = () => {
  return (
    <div className="w-screen h-screen bg-[var(--greenBackground)] flex justify-center items-center">
      <div className="min-w-1/2 h-[90%] bg-white shadow-lg rounded-lg p-8">
        <div className="h-full border-1 border-gray-300 border-solid p-8">
          <div className=" bg-[var(--blueText)] p-4 rounded text-xl font-semibold shadow-sm text-white mb-8 flex flex-wrap gap-2">
            <span>I want to take the train from</span> <StationAutoComplete />
            {" to "}
            <StationAutoComplete />
            {" by "}
            <TimeSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
