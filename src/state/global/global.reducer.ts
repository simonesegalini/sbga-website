import { Actions, GlobalState } from "./global.types";
import {
  SET_FINISHED_SCROLLING,
  SET_HIDE_LANDING_PAGE,
  SET_IS_DATA_LOADED,
  SET_LANDING_PAGE_IMAGES,
  SET_LANGUAGE,
} from "./global.constants";

export const initializeState = (): GlobalState => {
  return {
    isDataLoaded: false,
    hideLandingPage: false,
    finishedScrolling: false,
    landingPageImages: [],
    data: undefined,
  };
};

export const GlobalReducer = (
  state: GlobalState,
  action: Actions
): GlobalState => {
  switch (action.type) {
    case SET_LANDING_PAGE_IMAGES:
      return {
        ...state,
        ...action.payload,
      };
    case SET_IS_DATA_LOADED:
      return {
        ...state,
        isDataLoaded: true,
        data: {
          ...action.payload.data,
        },
      };
    case SET_FINISHED_SCROLLING:
      return {
        ...state,
        finishedScrolling: true,
      };
    case SET_HIDE_LANDING_PAGE:
      return {
        ...state,
        hideLandingPage: true,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default GlobalReducer;
