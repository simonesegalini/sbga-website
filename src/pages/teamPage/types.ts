import { Style } from "../../globalTypes";
import { Image, Person, TeamRow } from "../../schemas";

export interface IUseTeamPage {
  image: Image;
  rows: TeamRow[];
  people: Person[];
  styles: Style;
}
