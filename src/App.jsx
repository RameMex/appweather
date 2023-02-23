import "./App.css";
import {
  LanguageProvider,
  useChangeLanguageContext,
  useLanguageContext,
} from "./utils/LanguageProvider";
import { AppContainer } from "./AppContainer";
import { WeatherProvider } from "./utils/WeatherProvider";
import { PlaceProvider } from "./context/Place/PlaceProvider";

function App() {
  const language = useLanguageContext();
  const changeLanguage = useChangeLanguageContext();
  return (
    <LanguageProvider>
      <PlaceProvider>
        <WeatherProvider>
          <AppContainer />
        </WeatherProvider>
      </PlaceProvider>
    </LanguageProvider>
  );
}

export default App;
