"use client";
import React from "react";
import { useState } from "react";
import { stations } from "../../data/stations";
import { useEffect } from "react";

const StationAutoComplete = () => {
  const [startQuery, setStartQuery] = useState("");
  const [stopQuery, setStopQuery] = useState("");
  const [filteredStations, setFilteredStations] = useState<string[]>([]);
  //const [open, setOpen] = useState(false);
  const [startOpen, setStartOpen] = useState(false);
  const [stopOpen, setStopOpen] = useState(false);
  const [startStation, setStartStation] = useState("");
  const [stopStation, setStopStation] = useState("");

  const handleChange = async (value: string) => {
    //setOpen(true);
    // console.log(value);
    // console.log(stations);

    const filter = stations.filter((station) => {
      length = value.length;

      return station
        .slice(0, length)
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    setFilteredStations(filter);
    //console.log(filter);
  };

  return (
    <div>
      <div className="flex relative w-md gap-2">
        <input
          type="text"
          value={startQuery}
          onChange={(e) => {
            setStartOpen(true);
            setStartQuery(e.target.value);
            handleChange(e.target.value);
          }}
          placeholder="station name..."
          className="w-full h-8 px-2 border border-gray-100 outline-none"
        />

        {startQuery && startOpen && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow mt-1 max-h-40 overflow-y-auto z-20 text-black cursor-pointer">
            {filteredStations.map((station) => (
              <li
                key={station}
                onClick={() => {
                  setStartQuery(station);
                  setStartOpen(false);
                  setStartStation(station);
                }}
                className="hover:bg-gray-300"
              >
                {" "}
                {station}
              </li>
            ))}
          </ul>
        )}

        {" to "}

        <input
          type="text"
          value={stopQuery}
          onChange={(e) => {
            setStopOpen(true);
            setStopQuery(e.target.value);
            handleChange(e.target.value);
          }}
          placeholder="station name..."
          className="w-full h-8 px-2 border border-gray-100 outline-none"
        />

        {stopQuery && stopOpen && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow mt-1 max-h-40 overflow-y-auto z-20 text-black cursor-pointer">
            {filteredStations.map((station) => (
              <li
                key={station}
                onClick={() => {
                  setStopQuery(station);
                  setStopOpen(false);
                  setStopStation(station);
                }}
                className="hover:bg-gray-300"
              >
                {" "}
                {station}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StationAutoComplete;
