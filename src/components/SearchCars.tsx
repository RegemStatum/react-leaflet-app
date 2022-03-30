import React, { FC, useState } from "react";
import { useAppContext } from "../context/AppContext";
import styles from "./SearchCars.module.css";

const SearchCars: FC = () => {
  const { changeCarsToShow } = useAppContext();
  const [query, setQuery] = useState("");

  const handleSearchChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const query = target.value;
    setQuery(query);
    changeCarsToShow(query);
  };

  return (
    <input
      type="text"
      className={styles.input}
      value={query}
      onChange={handleSearchChange}
    />
  );
};

export default SearchCars;
