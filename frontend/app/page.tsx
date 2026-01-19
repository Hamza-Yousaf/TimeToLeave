import React from "react";
import StationAutoComplete from "./components/StationAutoComplete";
import TimeSelector from "./components/TimeSelector";

const page = () => {
  return (
    <div className="w-screen h-screen bg-[var(--greenBackground)] flex justify-center items-center">
      <div className="min-w-1/2 h-[90%] bg-white shadow-lg rounded-lg p-8">
        <div className="h-full border-1 border-gray-300 border-solid p-8">
          <div className=" bg-[var(--blueText)] p-4 rounded text-xl font-semibold shadow-sm text-white mb-8 flex flex-wrap gap-2 w-full">
            <div className="w-full flex items-center gap-2 flex-wrap">
              <span>I want to take the train from</span>
              {/* Make StationAutoComplete inline-flex */}
              <div className="inline-flex gap-2">
                <StationAutoComplete />
              </div>
              <span>by</span>
              <TimeSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
