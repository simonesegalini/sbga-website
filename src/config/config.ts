import config from "./application.json";
import { Paths } from "../navigation/types";

export enum Buttons {
  Home = "Home",
  Architecture = "Architecture",
  Design = "Design",
  Portfolio = "Portfolio",
  About = "About",
  Team = "Team",
  Contact = "Contact",
}

export interface NavButton {
  name: Buttons;
  path: string;
}

export const navButtons: NavButton[] = [
  { name: Buttons.Architecture, path: Paths.Architecture },
  {
    name: Buttons.Home,
    path: Paths.Home,
  },
  { name: Buttons.Design, path: Paths.Design },
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
  {
    name: Buttons.Contact,
    path: Paths.Contact,
  },
];

export const getAvailableLanguages = () => {
  return config.languages.available;
};

export const getNavbarButtons = (): NavButton[] => {
  return navButtons;
};

export default config;
