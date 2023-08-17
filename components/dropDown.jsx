import React from "react";

const Dropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded px-4 py-1 mt-[2px] text-sm border border-white bg-[#2D2D2D]"
    >
      {options.map(option => {
        return (
          <option value={option.value}>{option.label}</option>
        )
      })}
    </select>
  );
};

export default Dropdown;
