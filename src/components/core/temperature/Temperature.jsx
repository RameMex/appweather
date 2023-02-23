import { useLanguageContext } from "../../../utils/LanguageProvider";
import s from "./Temperature.module.css";
export const Temperature = ({ max, min }) => {
  const language = useLanguageContext();
  return (
    <div className={s.container}>
      <span>{language.temperature}</span>
      <span className={s.max}>Max : {max}°C</span>
      <span className={s.min}>Min : {min}°C</span>
    </div>
  );
};
