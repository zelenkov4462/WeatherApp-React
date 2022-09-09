import React, { memo, useContext } from "react";
import { useWeather } from "../../hooks/useWeather";
import { GlobalContext } from "../../App";

const Card = memo(({ city }) => {
  const data = useWeather(city);
  const { dispatch } = useContext(GlobalContext);
  console.log("data", data);
  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const handleOnDelete = () => {
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
  };

  const handleOnEdit = () => {
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
  };

  return (
    <div className="card">
      <div className="actionButtonWrap">
        <button className="actionButton green" onClick={handleOnEdit}>
          Edit
        </button>
        <button className="actionButton red" onClick={handleOnDelete}>
          X
        </button>
      </div>
      <div className="mainInfo">
        <img
          className="Icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="title">{name}</div>
        <div className="description">{description}</div>
        <div className="temperature">{temp.toFixed()}</div>
      </div>
      <div className="information">
        <div>Humidity: {humidity}</div>
        <div>Feels like: {feels_like}</div>
      </div>
    </div>
  );
});

export default Card;
