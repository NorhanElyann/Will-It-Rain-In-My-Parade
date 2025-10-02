import { LocationContext } from "./context";
import { useState } from "react";

export function LocationProvider({ children }) {
  const [selectedLocation, setSelectedLocation] = useState(null);
  return (
    <LocationContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </LocationContext.Provider>
  );
}
