import React from "react";

export const DailyCard = ({ dailyCard }) => {
  if (dailyCard === null) {
    return null;
  }
  const { dt, weather, main } = dailyCard;
  const { description, icon } = weather[0];
  const { temp } = main;
  const currentDate = new Date(dt * 1000);
  const currentTime = currentDate
    .toString()
    .split(" ")[4]
    .split(":")
    .splice(0, 2)
    .join(":");

  return (
    <div className="dailyCard">
      <div>{currentDate.toString().split(" ")[0]}</div>
      <div>
        {currentDate.toString().split(" ")[1]}{" "}
        {currentDate.toString().split(" ")[2]}
      </div>
      <div>{currentTime}</div>
      <img
        className="Icon"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="icon"
      />
      <div className="dailyTemp temperatureIcon"> {temp.toFixed(0)}</div>
      <div className="dailyDescription"> {description}</div>
    </div>
  );
};
