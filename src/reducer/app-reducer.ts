import { appReducerInitialState } from "../context/AppContext";
import {
  AppActions,
  AppReducerActions,
  AppReducerState,
} from "../context/AppContextTypes";

const reducer = (
  state = appReducerInitialState,
  action: AppReducerActions
): AppReducerState => {
  if (action.type === AppActions.ADD_CARS) {
    return { ...state, cars: action.payload, carsToShow: action.payload };
  }
  if (action.type === AppActions.OPEN_SEARCH_CONTAINER) {
    return { ...state, isSearchContainerOpen: true };
  }
  if (action.type === AppActions.CLOSE_SEARCH_CONTAINER) {
    return { ...state, isSearchContainerOpen: false };
  }
  if (action.type === AppActions.CHANGE_CARS_TO_SHOW) {
    const query = action.payload;
    const filteredCars = state.cars.filter((car) =>
      car.name.toLowerCase().includes(query.toLowerCase())
    );
    return { ...state, carsToShow: filteredCars };
  }
  if (action.type === AppActions.SET_CHOSEN_CAR_ID) {
    return { ...state, chosenCarId: action.payload };
  }
  if (action.type === AppActions.SET_MAP_POSITION) {
    return { ...state, mapPosition: { ...action.payload } };
  }
  if (action.type === AppActions.SET_MAP) {
    return { ...state, map: action.payload };
  }
  return { ...state };
};

export default reducer;
