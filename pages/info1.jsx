import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import Dropdown from "../components/dropDown";

const info1 = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [selectedOption2, setSelectedOption2] = useState("");
  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const [selectedOption3, setSelectedOption3] = useState("");
  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
  };

  const [ageSelect, setAgeSelect] = useState(null);
  const handleAgeSelect = (selectedOption) => {
    setAgeSelect(selectedOption);
  };

  const ageOptions = [
    { label: "17", value: "17" },
    { label: "18", value: "18" },
    { label: "19", value: "19" },
    { label: "20", value: "20" },
    { label: "21", value: "21" },
    { label: "22", value: "22" },
    { label: "23", value: "23" },
  ];

  const [countrySelect, setCountrySelect] = useState(null);
  const handleCountrySelect = (selectedOption) => {
    setAgeSelect(selectedOption);
  };

  const countryOptions = [
    { label: "Canada", value: "Canada" },
    { label: "USA", value: "USA" },
    { label: "China", value: "China" },
    { label: "Japan", value: "Japan" },
    { label: "India", value: "India" },
    { label: "Uk", value: "Uk" },
    { label: "Other", value: "Other" },
  ];

  return (
    <div className=" bg-gray-950 text-white">
      <div>
        <div className="flex justify-center">
          <h2>Tell us about yourself</h2>
          <button
            className="cursor-pointer font-semibold w-[150px] text-sm px-5 py-3 rounded-xl"
            style={{
              background: "rgba(38, 34, 97, 1)",
            }}
          >
            Save and Quit
          </button>
        </div>

        <div className="flex flex-col w-full h-1/4 bg-repeat-x bg-bottom h-full">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
          />
          <label htmlFor="pronouns">Preffered pronouns</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="she_her"
              checked={selectedOption === "she_her"}
              onChange={handleOptionChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">She/Her</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="he_him"
              checked={selectedOption === "he_him"}
              onChange={handleOptionChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">He/Him</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="they_them"
              checked={selectedOption === "they_them"}
              onChange={handleOptionChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">They/Them</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="not_answered"
              checked={selectedOption === "not_answered"}
              onChange={handleOptionChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Prefer to not answer</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="other"
              checked={selectedOption === "other"}
              onChange={handleOptionChange}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Other</span>
          </label>

          <label htmlFor="pronouns">What is your Gendar?</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="female"
              checked={selectedOption2 === "female"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Female</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="male"
              checked={selectedOption2 === "male"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Male</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="non_binary_non_conforning"
              checked={selectedOption2 === "non_binary_non_conforning"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Non Binary/Non conforning</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="trans_gendar"
              checked={selectedOption2 === "trans_gendar"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Transgendar</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="intersex"
              checked={selectedOption2 === "intersex"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Intersex</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="other2"
              checked={selectedOption2 === "other2"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Other</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="prefer_not_to_answer"
              checked={selectedOption2 === "prefer_not_to_answer"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Prefer not to answer</span>
          </label>

          <label htmlFor="pronouns">What is your Gendar?</label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="prefer_not_to_answer"
              checked={selectedOption2 === "prefer_not_to_answer"}
              onChange={handleOptionChange2}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Prefer not to answer</span>
          </label>

          <label htmlFor="pronouns">
            Which of the following best describes you?
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              value="indegenious"
              checked={selectedOption3 === "indegenious"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">
              Indegenious Intuit, Metis & First Nations
            </span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="south_asian"
              checked={selectedOption3 === "south_asian"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">South Asian</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="arab_western_asian"
              checked={selectedOption3 === "arab_western_asian"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Arab/Western Asian</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="east_asian"
              checked={selectedOption3 === "east_asian"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Eastern Asian</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="black"
              checked={selectedOption3 === "black"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Black</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="latinx"
              checked={selectedOption3 === "latinx"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Latinx/Hispanic</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="latinx"
              checked={selectedOption3 === "latinx"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Latinx/Hispanic</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="white"
              checked={selectedOption3 === "white"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">White/European</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="oceanic"
              checked={selectedOption3 === "oceanic"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Oceanic</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="Other"
              checked={selectedOption3 === "Other"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Other</span>
          </label>

          <label className="inline-flex items-center">
            <input
              type="radio"
              value="no_answer"
              checked={selectedOption3 === "no_answer"}
              onChange={handleOptionChange3}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2">Prefer not to Answer</span>
          </label>

          {/* use Dropdown to create dropdown for age */}
          <label htmlFor="age">What is your age?</label>
          <Dropdown
            options={ageOptions}
            value={ageSelect}
            onChange={handleAgeSelect}
            placeholder="Select an option"
          />
          <label htmlFor="country">Country of Residence</label>
          <Dropdown
            options={countryOptions}
            value={countrySelect}
            onChange={handleCountrySelect}
            placeholder="Select an option"
          />
          {/* create input for phone number */}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          {/* create input for github Link*/}
          <label htmlFor="github">Github Link</label>
          <input type="url" id="github" name="github" />
          {/* create input for linkedin Link*/}
          <label htmlFor="linkedin">Linkedin Link</label>
          <input type="url" id="linkedin" name="linkedin" />
          {/* create input for portfolio Link*/}
          <label htmlFor="portfolio">Website</label>
          <input type="url" id="portfolio" name="portfolio" />
        </div>
        <div>
          <button
            className="cursor-pointer font-semibold w-[150px] text-sm px-5 py-3 rounded-xl"
            style={{
              background: "rgba(250, 175, 64, 1)",
            }}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default info1;
