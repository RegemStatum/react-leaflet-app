export interface CarObject {
  id: number;
  // Широта
  latitude: number;
  // Долгота
  longitude: number;
  // Имя
  name: string;
}

export interface MapPosition {
  mapLat: number;
  mapLng: number;
  mapZoom: number;
}

export interface AppReducerState {
  cars: Array<CarObject>;
  carsToShow: Array<CarObject>;
  isSearchContainerOpen: boolean;
  chosenCarId: number;
  mapPosition: MapPosition;
  map: any;
}

export enum AppActions {
  ADD_CARS = "ADD_CARS",
  OPEN_SEARCH_CONTAINER = "OPEN_SEARCH_CONTAINER",
  CLOSE_SEARCH_CONTAINER = "CLOSE_SEARCH_CONTAINER",
  CHANGE_CARS_TO_SHOW = "CHANGE_CARS_TO_SHOW",
  SET_CHOSEN_CAR_ID = "SET_CHOSEN_CAR_ID",
  SET_MAP_POSITION = "SET_MAP_POSITION",
  SET_MAP = "SET_MAP",
}

interface AddCarsAction {
  type: AppActions.ADD_CARS;
  payload: Array<CarObject>;
}

interface OpenSearchContainerAction {
  type: AppActions.OPEN_SEARCH_CONTAINER;
}

interface CloseSearchContainerAction {
  type: AppActions.CLOSE_SEARCH_CONTAINER;
}

interface ChangeCarsToShowAction {
  type: AppActions.CHANGE_CARS_TO_SHOW;
  payload: string;
}

interface SetChosenCarId {
  type: AppActions.SET_CHOSEN_CAR_ID;
  payload: number;
}

interface SetMapPosition {
  type: AppActions.SET_MAP_POSITION;
  payload: MapPosition;
}

interface SetMap {
  type: AppActions.SET_MAP;
  payload: any;
}

export type AppReducerActions =
  | AddCarsAction
  | OpenSearchContainerAction
  | CloseSearchContainerAction
  | ChangeCarsToShowAction
  | SetChosenCarId
  | SetMapPosition
  | SetMap;
