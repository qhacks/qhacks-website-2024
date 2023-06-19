import React from "react";

const Dropdown = ({ options, value, onChange, placeholder }) => {
  return (
    <select
      options={options}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Dropdown;
