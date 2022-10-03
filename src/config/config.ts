import config from "./application.json";
import { Paths } from "../navigation/types";

export enum Buttons {
  Home = "Home",
  Portfolio = "Portfolio",
  About = "About",
  Team = "Team",
}

export interface NavButton {
  name: Buttons;
  path: string;
}

export const navButtons: NavButton[] = [
  {
    name: Buttons.Home,
    path: Paths.Home,
  },
  {
    name: Buttons.Portfolio,
    path: Paths.Portfolio,
  },
  {
    name: Buttons.About,
    path: Paths.About,
  },
  {
    name: Buttons.Team,
    path: Paths.Team,
  },
];

export const getAvailableLanguages = () => {
  return config.languages.available;
};

export const getNavbarButtons = (): NavButton[] => {
  return navButtons;
};

export default config;
