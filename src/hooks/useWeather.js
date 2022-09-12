import { useEffect, useState } from "react";
import { API_KEY } from "../service/API_KEY";

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((fetchedData) => {
        // if (fetchedData && fetchedData.cod && fetchedData.cod === "404") {
        if (fetchedData?.cod === "404") {
          throw new Error("CITY_NOT_FOUND");
        } else {
          setData(fetchedData);
        }
      })
      .catch((err) => {
        setData(null);
      });
  }, [city]);
  return data;
};
