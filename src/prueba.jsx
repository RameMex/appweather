import {
  useChangeLanguageContext,
  useLanguageContext,
} from "./utils/LanguageProvider";

export const Prueba = () => {
  const language = useLanguageContext();
  const changeLanguage = useChangeLanguageContext();

  return (
    <div>
      <h1>Vite + React </h1>
      <h1>{language?.title}</h1>
      <button onClick={changeLanguage}>cambia a es</button>
    </div>
  );
};
