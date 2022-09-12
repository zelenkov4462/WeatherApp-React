import React from "react";

const InputTag = ({ inputValue, handleOnChange, ref }) => {
  return (
    <input
      ref={ref}
      className="input"
      value={inputValue}
      onChange={handleOnChange}
      placeholder="Введите название города"
    />
  );
};

export default InputTag;
