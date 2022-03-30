import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import { CarObject } from "../context/AppContextTypes";
import styles from "./Car.module.css";

const Car: FC<CarObject> = ({ name, id, latitude, longitude }) => {
  const { chosenCarId, map, setChosenCarId, setMapPosition } = useAppContext();

  const handleCarClick = () => {
    setChosenCarId(id);
    setMapPosition({ mapLat: latitude, mapLng: longitude, mapZoom: 10 });
    map.setView([latitude, longitude], 10);
  };

  return (
    <li
      className={`${styles.car}  ${
        id === chosenCarId ? styles.chosen_car : ""
      }  `}
      onClick={handleCarClick}
    >
      {name}
    </li>
  );
};

export default Car;
