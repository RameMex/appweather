export const getPlaces = async (value) => {
  const places = await fetch(
    `https://search.reservamos.mx/api/v2/places?q=${value}`
  );
  const response = await places.json();
  if (response === undefined || response.error) {
    throw new Error(`Error: ${response.error}`);
  }
  return response;
};
