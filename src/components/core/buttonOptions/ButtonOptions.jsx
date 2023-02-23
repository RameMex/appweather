import {
  useChangeLanguageContext,
  useLanguageContext,
} from "../../../utils/LanguageProvider";
import { OptionsIcon } from "../icons/Options";
import s from "./ButtonOptions.module.css";

export const ButtonOptions = () => {
  const language = useLanguageContext();
  const changeLanguage = useChangeLanguageContext();
  return (
    <div className={s.button_options_content}>
      <select
        name="language"
        value={language.abbreviation}
        onChange={(event) => changeLanguage(event.target.value)}
        style={{ border: "none" }}
      >
        <option value="es">Es</option>
        <option value="en">En</option>
      </select>
    </div>
  );
};
