import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LeafletGeocoder from "./LeafletGeocoder";
const Map = ({ onLocationSelected }) => {
  return (
    <div className="h-[300px] w-full rounded-lg shadow-md">
      <MapContainer
        center={[30.0444, 31.2357]}
        zoom={13}
        className="h-full w-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        <LeafletGeocoder onLocationSelected={onLocationSelected} />
      </MapContainer>

      {/* {selectedLocation && (
        <div className="mt-2 text-sm text-gray-700">
          <strong>Selected:</strong> {selectedLocation.label}
        </div>
      )} */}
    </div>
  );
};

export default Map;
