import React, { useContext, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { GlobalContext } from "../../App";
import Card from "../Card/Card";
import { useForecast } from "../../hooks/useForecast";
import { DailyCard } from "../DailyCard/DailyCard";

const SingleCity = () => {
  const [cityCoord, setCityCoord] = useState(null);
  const navigate = useNavigate();
  const data = useForecast(cityCoord);
  const params = useParams();
  const { city } = params;
  return (
    <div className="singleCityWrap">
      {/*<button onClick={() => navigate("/home", { replace: true })}>*/}
      {/*  Go home*/}
      {/*</button>*/}
      <Link to={"/home"} className="goHomeLink">
        Go Home
      </Link>
      <Card key={city} city={city} setCityCoord={setCityCoord} />
      {/*{data && <DailyCards data={data.list} />}*/}
      {data && (
        <div className="dailyCards">
          {/*{data.list.slice(0, 7).map((dailyCard) => (*/}
          {data.list.map((dailyCard) => (
            <DailyCard key={dailyCard.dt} dailyCard={dailyCard} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SingleCity;
