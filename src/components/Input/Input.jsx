import React, { useContext, useRef, useState } from "react";
import { GlobalContext } from "../../App";
export const Input = () => {
  const ref = useRef(null);
  const {
    dispatch,
    state: { inputValue, editingCity },
  } = useContext(GlobalContext);

  const handleOnAdd = (e) => {
    if (inputValue.length) {
      dispatch({
        type: "ADD_CITY",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
      ref.current.focus();
    }
  };

  const handleOnDone = (e) => {
    if (inputValue.length) {
      dispatch({
        type: "EDIT_CITY_DONE",
        payload: inputValue,
      });
      dispatch({
        type: "RESET_INPUT_VALUE",
      });
      ref.current.focus();
    }
  };

  const handleOnChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT_VALUE",
      payload: e.target.value,
    });
  };
  return (
    <div className="inputWrap">
      <input
        ref={ref}
        className="input"
        value={inputValue}
        onChange={handleOnChange}
        placeholder="Введите название города"
      />
      {editingCity ? (
        <button className="button" onClick={handleOnDone}>
          Done
        </button>
      ) : (
        <button className="button" onClick={handleOnAdd}>
          +
        </button>
      )}
    </div>
  );
};
