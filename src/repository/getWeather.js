export const getWeather = async ({ lat, long, lang }) => {
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts,current&units=metric&cnt=7&lang=${lang}&appid=${
      import.meta.env.VITE_API_KEY_OPENWEATHERMAP
    }`
  );

  const response = await weather.json();
  if (response === undefined || response.error) {
    throw new Error(`Error: ${response.error}`);
  }
  return response;
};
