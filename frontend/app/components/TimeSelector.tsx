"use client";
import React from "react";
import startStation from "../components/StationAutoComplete";

const TimeSelector = () => {
  const handleChange = async (value: string) => {
    console.log(startStation);
    // let data = await fetch("http://localhost:5150/api/trips/");
    // let times = await data.json();
    // console.log(times);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        className="outline-none border border-gray-300 rounded px-2 h-8 w-24"
      />
    </div>
  );
};

export default TimeSelector;
