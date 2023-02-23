import cloud from "./../../../assets/cloud2.png";
import s from "./WeatherContent.module.css";
export const WeatherContent = ({ temperature }) => {
  return (
    <div className={s.container}>
      <span className={s.temperature_text}>{Math.trunc(temperature)}°C</span>
      <img height="180px" width="243px" src={cloud} />
    </div>
  );
};
