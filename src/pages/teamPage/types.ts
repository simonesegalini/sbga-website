import { Style } from "../../globalTypes";
import { Image, TeamRow } from "../../schemas";
import { TeamPerson } from "../../components/molecules/teamComponent/types";

export interface IUseTeamPage {
  image: Image;
  rows: TeamRow[];
  data: TeamPerson[];
  styles: Style;
}
