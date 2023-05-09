import { useDimensions } from "../../../hooks/useDimensions";
import { useMemo } from "react";
import { ITeamComponent } from "./types";
import { chunkArray } from "../../../utils";

const useTeamComponent = (props: ITeamComponent) => {
  const { team } = props;
  const { screenSize } = useDimensions();
  const isSmall = screenSize === "sm" || screenSize === "xs";

  const rows = useMemo(() => {
    if (isSmall) {
      return chunkArray(team, 1);
    }
    return chunkArray(team, 3);
  }, [isSmall, team]);
  const padding = useMemo(() => {
    if (isSmall) {
      return 6;
    }
    return 8;
  }, [isSmall]);

  return {
    padding,
    rows,
  };
};

export default useTeamComponent;
