import { useLanguageContext } from "../../../utils/LanguageProvider";
import { WindIcon } from "../icons/Wind";
import s from "./Wind.module.css";

export const Wind = ({ wind }) => {
  const language = useLanguageContext();
  return (
    <div className={s.container}>
      <WindIcon />
      <div>{language.wind}</div>
      <div>{wind}km/h</div>
    </div>
  );
};
