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
  [Paths.Architecture]: "ARCHITECTURE — SBGA - Blengini Ghirardelli",
  [Paths.Design]: '"DESIGN — SBGA - Blengini Ghirardelli"',
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
