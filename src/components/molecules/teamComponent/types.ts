import { Person } from "../../../schemas";

export interface ITeamComponent {
  people: Person[];
}

export interface IPeopleRow {
  people: Person[];
  index: number;
}

export interface IPerson {
  person: Person;
  indexPerson: number;
}
