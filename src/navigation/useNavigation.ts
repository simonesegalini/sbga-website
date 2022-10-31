import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export const useNavigation = () => {
  const navigation = useNavigate();

  const navigate = useCallback(
    (route: string) => {
      navigation(route);
    },
    [navigation],
  );
  return { navigate };
};
