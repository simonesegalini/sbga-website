import { matchRoutes, useLocation } from "react-router-dom";
import { Paths } from "../navigation/types";

export const useGetPath = () => {
  const location = useLocation();
  const routes = Object.values(Paths).map((path) => ({ path: path }));
  const value = matchRoutes(routes, location);
  return value ? value[0].route.path : undefined;
};
