import { useState } from "react";
import { daysOfWeek } from "../utils/daysOfWeek";

export const useTab = () => {
  const [tab, setTab] = useState(daysOfWeek);

  const changeCurrentTab = (newCurrentTab) => {
    setTab({ current: newCurrentTab, week: [...tab.week] });
  };
  return {
    changeCurrentTab,
    tab,
  };
};
