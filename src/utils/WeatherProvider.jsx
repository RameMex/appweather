import { createContext, useContext, useState } from "react";
import { WeatherContext } from "../hooks/useWeather";

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  return (
    <WeatherContext.Provider value={[weather, setWeather]}>
      {children}
    </WeatherContext.Provider>
  );
};
