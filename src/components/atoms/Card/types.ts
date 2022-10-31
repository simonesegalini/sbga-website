import { CSSProperties } from "react";

export interface ICard extends Record<string, any> {
  id: number;
  imgSrc: string;
  title_it: string;
  title_en: string;
  featured?: boolean;
  onItemClick?: (id: number) => void;
  overlayTransition?: boolean;
  containerStyle?: CSSProperties;
}
