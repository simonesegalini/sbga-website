import { Style } from "../../globalTypes";
import { AboutRow, Image } from "../../schemas";
import React from "react";

export interface IUseAboutPage {
  imageTop: Image;
  imageBottom: Image;
  rows: AboutRow[];
  OverlayComponent?: React.ElementType;
  styles: Style;
  onTeamClick: () => void;
}
