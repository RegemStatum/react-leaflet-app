import React, { FC } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useAppContext } from "../context/AppContext";
import styles from "./Map.module.css";

const Map: FC = () => {
  const { cars, mapPosition, setMap } = useAppContext();
  const { mapLat, mapLng, mapZoom } = mapPosition;

  return (
    <MapContainer
      center={[mapLat, mapLng]}
      zoom={mapZoom}
      whenCreated={setMap}
      className={styles.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {cars.map((car) => {
        return (
          <Marker position={[car.latitude, car.longitude]} key={car.id}>
            <Popup>{car.name}</Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
