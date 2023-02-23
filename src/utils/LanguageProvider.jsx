import { createContext, useContext, useState } from "react";
import { es } from "./es";
import { en } from "./en";
const languageContext = createContext();
const changeLanguageContext = createContext();

export const useLanguageContext = () => {
  return useContext(languageContext);
};

export const useChangeLanguageContext = () => {
  return useContext(changeLanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(es);

  const changeLanguage = () => {
    if (language.abbreviation === "es") {
      setLanguage(en);
    } else {
      setLanguage(es);
    }
  };

  return (
    <languageContext.Provider value={language}>
      <changeLanguageContext.Provider value={changeLanguage}>
        {children}
      </changeLanguageContext.Provider>
    </languageContext.Provider>
  );
};
