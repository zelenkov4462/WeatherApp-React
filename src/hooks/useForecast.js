import { useEffect, useState } from "react";
import { API_KEY } from "../service/API_KEY";

export const useForecast = (coords) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (coords !== null) {
      const { lat, lon } = coords;
      fetch(
        // `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=alerts,current,minutely,hourly&appid=${API_KEY}`
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then(setData);
    }
  }, [coords]);
  return data;
};
