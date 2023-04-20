import { Person } from "../../../schemas";

export interface TeamPerson extends Person {
  open: boolean;
}

export interface ITeamComponent {
  team: TeamPerson[];
}

export interface TeamComponentState {
  index: null | number;
  person: null | TeamPerson;
}
