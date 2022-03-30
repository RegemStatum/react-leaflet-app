import React, { FC, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/app-reducer";
import { AppActions, AppReducerState, MapPosition } from "./AppContextTypes";

export const appReducerInitialState: AppReducerState = {
  cars: [],
  carsToShow: [],
  isSearchContainerOpen: true,
  chosenCarId: -1,
  mapPosition: {
    mapLat: 40.505,
    mapLng: 15,
    mapZoom: 3,
  },
  map: null,
};

const appContextInitialState = {
  ...appReducerInitialState,
  openSearchContainer: () => {},
  closeSearchContainer: () => {},
  changeCarsToShow: (query: string) => {},
  setChosenCarId: (id: number) => {},
  setMapPosition: (positionObj: MapPosition) => {},
  setMap: (map: any) => {},
};

const appContext = React.createContext(appContextInitialState);

const AppContext: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, appReducerInitialState);

  useEffect(() => {
    fetchCars();
  }, []);

  // functions
  async function fetchCars() {
    const response = await fetch(
      "https://raw.githubusercontent.com/waliot/test-tasks/master/assets/data/frontend-1-dataset.json"
    );
    const data = await response.json();
    dispatch({ type: AppActions.ADD_CARS, payload: data });
  }

  function openSearchContainer() {
    dispatch({ type: AppActions.OPEN_SEARCH_CONTAINER });
  }

  function closeSearchContainer() {
    dispatch({ type: AppActions.CLOSE_SEARCH_CONTAINER });
  }

  function changeCarsToShow(query: string) {
    dispatch({ type: AppActions.CHANGE_CARS_TO_SHOW, payload: query });
  }

  function setChosenCarId(id: number) {
    dispatch({ type: AppActions.SET_CHOSEN_CAR_ID, payload: id });
  }

  function setMapPosition(positionObj: MapPosition) {
    dispatch({ type: AppActions.SET_MAP_POSITION, payload: positionObj });
  }

  function setMap(map: any) {
    dispatch({ type: AppActions.SET_MAP, payload: map });
  }

  return (
    <appContext.Provider
      value={{
        cars: state.cars,
        carsToShow: state.carsToShow,
        isSearchContainerOpen: state.isSearchContainerOpen,
        chosenCarId: state.chosenCarId,
        mapPosition: state.mapPosition,
        map: state.map,
        openSearchContainer,
        closeSearchContainer,
        changeCarsToShow,
        setChosenCarId,
        setMapPosition,
        setMap,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(appContext);
};

export default AppContext;
