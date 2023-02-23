import { useLanguageContext } from "../../../utils/LanguageProvider";
import { DropIcon } from "../icons/Drop";
import s from "./Humidity.module.css";
export const Humidity = ({ humidity }) => {
  const language = useLanguageContext();
  return (
    <div className={s.container}>
      <DropIcon />
      <div>{language.humidity}</div>
      <div>{humidity}%</div>
    </div>
  );
};
