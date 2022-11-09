import React, { CSSProperties } from "react";
import { Image } from "../../../schemas";

export interface ICard extends Record<string, any> {
  id: number;
  image: Image;
  title?: string;
  featured?: boolean;
  onItemClick?: (id: number) => void;
  overlayTransition?: boolean;
  containerStyle?: CSSProperties;
  CustomOverlayComponent?: React.ElementType;
  bcg_color?: string;
}
