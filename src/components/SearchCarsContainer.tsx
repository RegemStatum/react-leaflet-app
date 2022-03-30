import React, { FC } from "react";
import { useAppContext } from "../context/AppContext";
import CarsList from "./CarsList";
import SearchCars from "./SearchCars";
import styles from "./SearchCarsContainer.module.css";

const SearchCarsContainer: FC = () => {
  const { isSearchContainerOpen, openSearchContainer, closeSearchContainer } =
    useAppContext();

  if (isSearchContainerOpen) {
    return (
      <div className={styles.container}>
        <div>
          <h2>Объекты</h2>
          <button onClick={closeSearchContainer} className={styles.close_btn}>
            X
          </button>
        </div>
        <SearchCars />
        <CarsList />
      </div>
    );
  } else {
    return (
      <button onClick={openSearchContainer} className={styles.open_btn}>
        Open
      </button>
    );
  }
};

export default SearchCarsContainer;
