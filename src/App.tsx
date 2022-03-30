import React from "react";
import Map from "./components/Map";
import SearchCarsContainer from "./components/SearchCarsContainer";
import AppContext from "./context/AppContext";

function App() {
  return (
    <AppContext>
      <Map />
      <SearchCarsContainer />
    </AppContext>
  );
}

export default App;
