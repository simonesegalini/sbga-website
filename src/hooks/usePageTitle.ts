import { matchRoutes, useLocation } from "react-router-dom";
import { Paths } from "../navigation/types";
import { useEffect } from "react";

interface PageTitle {
  [key: string]: string;
}

export const pageTitles: PageTitle = {
  Home: "SBGA - Blengini Ghirardelli",
  [Paths.Home]: "SBGA - Blengini Ghirardelli",
  [Paths.Portfolio]: "Portfolio — SBGA - Blengini Ghirardelli",
  [Paths.About]: "About — SBGA - Blengini Ghirardelli",
  [Paths.Team]: "Team — SBGA - Blengini Ghirardelli",
  [Paths.Architecture]: "Architecture — SBGA - Blengini Ghirardelli",
  [Paths.ArchitectureDetail]: "Architecture — SBGA - Blengini Ghirardelli",
  [Paths.Services]: "Services — SBGA - Blengini Ghirardelli",
  [Paths.ServicesDetail]: "Services — SBGA - Blengini Ghirardelli",
  [Paths.Design]: "Design — SBGA - Blengini Ghirardelli",
  [Paths.DesignDetail]: "Design — SBGA - Blengini Ghirardelli",
  [Paths.Contact]: "Contact — SBGA - Blengini Ghirardelli",
  [Paths.Mail]: "Contact — SBGA - Blengini Ghirardelli",
};

const useGetPath = () => {
  const location = useLocation();
  const routes = Object.values(Paths).map((path) => ({ path: path }));
  const value = matchRoutes(routes, location);
  return value ? value[0].route.path : undefined;
};

export const usePageTitle = () => {
  const path = useGetPath();
  useEffect(() => {
    if (!path) {
      document.title = pageTitles["Home"];
      return;
    }

    document.title = pageTitles[path]
      ? pageTitles[path]
      : pageTitles["/" + path.split("/")[1] + "/"];
  }, [path]);
};
