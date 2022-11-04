import { Style } from "../../globalTypes";
import { Image, Row } from "../../schemas";

export interface IUsePortfolioPage {
  image: Image;
  rows: Row[];
  styles: Style;
}
