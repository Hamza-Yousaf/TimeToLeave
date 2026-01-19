"use client";
import React from "react";

const TimeSelector = () => {
  const handleChange = (value: string) => {
    console.log("Selected time:", value);
  };

  return (
    <div>
      <input
        type="time"
        onChange={(e) => handleChange(e.target.value)}
        className="outline-none border border-gray-300 rounded px-2 h-8"
      />
    </div>
  );
};

export default TimeSelector;
