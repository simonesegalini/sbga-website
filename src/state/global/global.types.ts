import {
  SET_FINISHED_SCROLLING,
  SET_HIDE_LANDING_PAGE,
  SET_IS_DATA_LOADED,
  SET_LANDING_PAGE_IMAGES,
  SET_LANGUAGE,
} from "./global.constants";
import { Data } from "../../schemas";

export type Language = "it" | "en";

//**STATE**//
export type GlobalState = {
  data: Data | undefined;
  finishedScrolling: boolean;
  hideLandingPage: boolean;
  isDataLoaded: boolean;
  language?: Language;
  landingPageImages: HTMLImageElement[];
};

//**ACTIONS**//
export interface SetLandingPageImages {
  landingPageImages: HTMLImageElement[];
}

export interface SetLanguage {
  language: Language;
}

export interface SetData {
  data: Data;
}

export type ActionsMap = {
  [SET_HIDE_LANDING_PAGE]: null;
  [SET_LANDING_PAGE_IMAGES]: SetLandingPageImages;
  [SET_FINISHED_SCROLLING]: null;
  [SET_IS_DATA_LOADED]: SetData;
  [SET_LANGUAGE]: SetLanguage;
};

export type Actions = {
  [Key in keyof ActionsMap]: {
    type: Key;
    payload: ActionsMap[Key];
  };
}[keyof ActionsMap];

//**CONTEXT**//
export type Dispatcher = <
  Type extends Actions["type"],
  Payload extends ActionsMap[Type]
>(
  type: Type,
  ...payload: Payload extends undefined ? [undefined?] : [Payload]
) => void;

export type GlobalContextInterface = readonly [GlobalState, Dispatcher];
