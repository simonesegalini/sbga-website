import { Person } from "../../../schemas";

export interface TeamPerson extends Person {
  open: boolean;
}

export interface ITeamComponent {
  team: TeamPerson[];
}
