import { Style } from "../../globalTypes";
import { Image, Row } from "../../schemas";

export interface IUseDesignPage {
  image: Image;
  rows: Row[];
  styles: Style;
}
