import { useEffect, useReducer, useState } from "react";
import { removeElementFromArray } from "../helpers";

const initialState = {
  inputValue: "",
  editingCity: "",
  citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CITY": {
      return {
        ...state,
        citiesList: [...state.citiesList, action.payload],
      };
    }
    case "DELETE_CITY": {
      const oldArray = state.citiesList;
      const newArray = removeElementFromArray(action.payload, oldArray);
      // const newArray = oldArray.filter((el) => el !== action.payload);
      return {
        ...state,
        citiesList: newArray,
        editingCity: initialState.editingCity,
        inputValue: initialState.inputValue,
      };
    }

    case "EDIT_CITY": {
      return {
        ...state,
        inputValue: action.payload,
        editingCity: action.payload,
      };
    }
    case "EDIT_CITY_DONE": {
      const { editingCity } = state;
      if (!action.payload) {
        return {
          ...state,
          inputValue: initialState.inputValue,
          editingCity: initialState.editingCity,
        };
      }
      const oldArray = state.citiesList;
      const filteredArray = removeElementFromArray(editingCity, oldArray);
      // const filteredArray = oldArray.filter((el) => el !== editingCity);
      const newArray = [...filteredArray, action.payload];
      return {
        ...state,
        citiesList: newArray,
        inputValue: initialState.inputValue,
        editingCity: initialState.editingCity,
      };
    }

    case "CHANGE_INPUT_VALUE": {
      return { ...state, inputValue: action.payload };
    }
    case "RESET_INPUT_VALUE": {
      return { ...state, inputValue: initialState.inputValue };
    }
    default:
      return initialState;
  }
};

export const useCitiesList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { citiesList } = state;
  useEffect(() => {
    localStorage.setItem("citiesList", JSON.stringify(citiesList));
  }, [citiesList]);
  // return [citiesList, dispatch];
  return [state, dispatch];
};
