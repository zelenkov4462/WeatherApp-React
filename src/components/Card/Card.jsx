import React, { memo, useContext, useEffect } from "react";
import { useWeather } from "../../hooks/useWeather";
import { GlobalContext } from "../../App";
import { Link, useMatch, useNavigate } from "react-router-dom";

const Card = memo(({ city, setCityCoord }) => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const isHome = Boolean(useMatch("/home"));
  const data = useWeather(city);

  useEffect(() => {
    if (data && data.coord.lat && data.coord.lon && setCityCoord) {
      // if (data?.coord.lat && data?.coord.lon && setCityCoord) {
      setCityCoord({
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    }
  }, [data, setCityCoord]);

  const handleOnDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "DELETE_CITY",
      payload: city,
    });
    // navigate("../home", { replace: true });
  };

  const handleOnEdit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({
      type: "EDIT_CITY",
      payload: city,
    });
    navigate("../home", { replace: true });
  };

  const handleOnLinkClick = () => {
    dispatch({
      type: "EDIT_CITY_DONE",
    });
  };

  if (data === null) {
    return (
      <>
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
            <div className="title">{city}</div>
            <div className="description">Not found</div>
          </div>
        </div>
      </>
    );
  }

  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  if (isHome) {
    return (
      <Link
        className="card"
        to={`/city/${city.toLowerCase()}`}
        onClick={handleOnLinkClick}
      >
        <div>
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
            <div className="temperature temperatureIcon">{temp.toFixed()}</div>
          </div>
          <div className="information">
            <div>Humidity: {humidity}</div>
            <div>Feels like: {feels_like}</div>
          </div>
        </div>
      </Link>
    );
  }

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
