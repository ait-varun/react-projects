"use client";
import { useState } from "react";

const countries = [
  {
    name: "Afghanistan",
    code: "AF",
    states: [
      { name: "Balkh", code: "BLK" },
      { name: "Badghis", code: "BDG" },
    ],
  },
  {
    name: "India",
    code: "IN",
    states: [
      { name: "Delhi", code: "DL" },
      { name: "Mumbai", code: "MB" },
    ],
  },
];

export default function SearchBox() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [states, setStates] = useState([]);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setSelectedState("");
    const country = countries.find((c) => c.code === countryCode);
    setStates(country ? country.states : []);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  const handleSubmit = () => {
    console.log(selectedCountry, selectedState);
    setSelectedCountry("");
    setSelectedState("");
    setStates([]);
  };

  return (
    <>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Search Box
        </h1>
        <div className="mb-4">
          <select
            name="country"
            id="country"
            onChange={handleCountryChange}
            value={selectedCountry}
            className="block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
            <option value="">Select a country</option>
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6 relative group">
          <select
            name="state"
            id="state"
            onChange={handleStateChange}
            value={selectedState}
            disabled={!selectedCountry}
            className={`block w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
              !selectedCountry ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            <option value="">
              {selectedCountry ? "Select a state" : "Select a country first"}
            </option>
            {states.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
          {!selectedCountry && (
            <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 bottom-full left-1/2 transform -translate-x-1/2 mb-2">
              Please select a country first
            </div>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedCountry || !selectedState}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
              !selectedCountry || !selectedState
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
