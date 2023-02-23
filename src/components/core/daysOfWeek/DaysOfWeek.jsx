import { daysOfWeek } from "../../../utils/daysOfWeek";
import { useLanguageContext } from "../../../utils/LanguageProvider";
import s from "./DaysOfWeek.module.css";
export const DaysOfWeek = ({ changeCurrentTab, currentTab }) => {
  const language = useLanguageContext();
  return (
    <div className={s.container}>
      {daysOfWeek.week.map((day) => (
        <span
          key={day.numberDay}
          className={
            currentTab.numberDay === day.numberDay
              ? s.name_of_day_selected
              : s.name_of_day
          }
          onClick={() => changeCurrentTab(day)}
        >
          {language.abbreviation === "es" ? day.nameDayEs : day.nameDay}
        </span>
      ))}
    </div>
  );
};
