import { Actions, GlobalState } from "./global.types";
import {
  SET_FINISHED_SCROLLING,
  SET_HIDE_LANDING_PAGE,
  SET_IS_DATA_LOADED,
  SET_LANDING_PAGE_IMAGES,
  SET_LANGUAGE,
} from "./global.constants";
import { Types } from "../../schemas";

export const initializeState = (): GlobalState => {
  return {
    isDataLoaded: false,
    hideLandingPage: false,
    finishedScrolling: false,
    landingPageImages: [],
    data: {
      data: [],
      home: [],
      settings: [],
    },
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
          data: [
            {
              ...action.payload.data.data[0],
              about: action.payload.data.data[0].about,
              [Types.architectures]: {
                image: action.payload.data.data[0][Types.architectures].image,
                rows: action.payload.data.data[0][Types.architectures].rows.map(
                  (row) => ({
                    ...row,
                    items: row.items.map((r) => ({
                      ...r,
                      type: Types.architectures,
                    })),
                  })
                ),
              },
              [Types.services]: {
                image: action.payload.data.data[0][Types.services].image,
                rows: action.payload.data.data[0][Types.services].rows.map(
                  (row) => ({
                    ...row,
                    items: row.items.map((r) => ({
                      ...r,
                      type: Types.services,
                    })),
                  })
                ),
              },
              [Types.design]: {
                image: action.payload.data.data[0][Types.design].image,
                rows: action.payload.data.data[0][Types.design].rows.map(
                  (row) => ({
                    ...row,
                    items: row.items.map((r) => ({
                      ...r,
                      type: Types.design,
                    })),
                  })
                ),
              },
            },
          ],
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
