import { useState } from "react";
import { PlaceContext } from "./PlaceContext";

export const PlaceProvider = ({ children }) => {
  const [place, setPlace] = useState();
  return (
    <PlaceContext.Provider value={[place, setPlace]}>
      {children}
    </PlaceContext.Provider>
  );
};
