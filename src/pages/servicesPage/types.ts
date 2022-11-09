import { Style } from "../../globalTypes";
import { Image, Row } from "../../schemas";

export interface IUseServicesPage {
  image: Image;
  rows: Row[];
  styles: Style;
}
