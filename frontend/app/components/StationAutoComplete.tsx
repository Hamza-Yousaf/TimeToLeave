"use client";
import React from "react";
import { useState } from "react";
import { stations } from "../../data/stations";
import { useEffect } from "react";

const StationAutoComplete = () => {
  const [query, setQuery] = useState("");
  const [filteredStations, setFilteredStations] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleChange = async (value: string) => {
    setOpen(true);
    console.log(value);
    setQuery(value);
    console.log(stations);

    const filter = stations.filter((station) => {
      length = value.length;

      return station
        .slice(0, length)
        .toLowerCase()
        .includes(value.toLowerCase());
    });

    setFilteredStations(filter);
    console.log(filter);
  };

  return (
    <div className="w-48 relative inline-block">
      <input
        type="text"
        value={query}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="station name..."
        className="w-full h-8 px-2 border border-gray-100 outline-none"
      />

      {query && open && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded shadow mt-1 max-h-40 overflow-y-auto z-20 text-black cursor-pointer">
          {filteredStations.map((station) => (
            <li
              key={station}
              onClick={() => {
                setQuery(station);
                setOpen(false);
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
  );
};

export default StationAutoComplete;
