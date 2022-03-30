import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import Car from "./Car";
import styles from "./CarsList.module.css";

const CarsList: FC = () => {
  const { carsToShow } = useAppContext();

  return (
    <ul className={styles.container}>
      {carsToShow.map((car) => (
        <Car key={car.id} {...car} />
      ))}
    </ul>
  );
};

export default CarsList;
