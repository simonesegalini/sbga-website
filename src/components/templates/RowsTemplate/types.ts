import { AboutRow, Row, TeamRow } from "../../../schemas";

export type RowType = "row" | "aboutRow" | "teamRow";

interface IRowsTemplate<T extends RowType> {
  type: T;
}

interface IRowTemplate extends IRowsTemplate<"row"> {
  rows: Row[];
}

interface IAboutRowTemplate extends IRowsTemplate<"aboutRow"> {
  rows: AboutRow[];
}

interface ITeamRowTemplate extends IRowsTemplate<"teamRow"> {
  rows: TeamRow[];
}

export type RowsPropsType = IRowTemplate | IAboutRowTemplate | ITeamRowTemplate;
