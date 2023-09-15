import React, { useState } from "react";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-col space-y-2">
      <label className="inline-flex items-center">
        <input
          type="radio"
          value="option1"
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
          className="form-radio text-indigo-600 h-4 w-4"
        />
        <span className="ml-2">Option 1</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
          className="form-radio text-indigo-600 h-4 w-4"
        />
        <span className="ml-2">Option 2</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
          className="form-radio text-indigo-600 h-4 w-4"
        />
        <span className="ml-2">Option 3</span>
      </label>
    </div>
  );
};

export default RadioButtons;
