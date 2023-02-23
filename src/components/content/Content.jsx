import { useEffect, useState } from "react";
import { usePlace } from "../../hooks/usePlace";
import { useTab } from "../../hooks/useTab";
import { useWeather } from "../../hooks/useWeather";
import { getWeather } from "../../repository/getWeather";
import { DaysOfWeek } from "../core/daysOfWeek/DaysOfWeek";
import { Temperature } from "../core/temperature/Temperature";
import { TitleContent } from "../core/titleContent/TitleContent";
import { WeatherContent } from "../core/weatherContent/WeatherContent";
import s from "./Content.module.css";
import thunder from "./../../assets/thunder.png";
import { Humidity } from "../core/humidity/Humidity";
import { Wind } from "../core/wind/Wind";
import {
  useChangeLanguageContext,
  useLanguageContext,
} from "../../utils/LanguageProvider";

export const Content = () => {
  const [weather, setWeather] = useWeather(null);
  const [place, setPlace] = usePlace();
  const [loading, setLoading] = useState(false);
  const { changeCurrentTab, tab } = useTab();
  const changeLanguage = useChangeLanguageContext();
  const language = useLanguageContext();
  useEffect(() => {
    if (place) {
      searchWeather();
    }
    async function searchWeather() {
      setLoading(true);
      const data = await getWeather({
        lat: place.lat,
        long: place.long,
        lang: language.abbreviation,
      });
      setWeather({ current: { ...data.daily[0] }, ...data });
      setLoading(false);
    }
  }, [place, language.abbreviation]);

  useEffect(() => {
    if (weather) {
      const newWeather = weather?.daily.find(
        (day) => new Date(day.dt * 1000).getDay() === tab.current.numberDay
      );
      setWeather((prevData) => ({ ...prevData, current: { ...newWeather } }));
    }
  }, [tab.current]);

  if (!weather) {
    return (
      <div className={s.container_no_information}>
        <h2 className={s.text_no_information}>{language.no_information}</h2>
        <img src={thunder} alt="thunder" height="150px" width="71px" />
      </div>
    );
  }
  return (
    <div className={s.container}>
      <TitleContent
        title={place?.city_name}
        subTitle={weather?.current?.weather[0]?.description}
      />
      <WeatherContent temperature={weather?.current?.temp?.day} />
      <DaysOfWeek
        changeCurrentTab={changeCurrentTab}
        currentTab={tab.current}
      />
      <div className={s.footer}>
        <Temperature
          min={Math.trunc(weather?.current?.temp?.min)}
          max={Math.trunc(weather?.current?.temp?.max)}
        />
        <Wind wind={weather?.current?.wind_speed} />
        <Humidity humidity={weather?.current?.humidity} />
      </div>
    </div>
  );
};
