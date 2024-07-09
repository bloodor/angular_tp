import {Species} from "../species/species";
import {Person} from "../persons/person";

export class Animals {
  id: number|null;
  name : string;
  color : string;
  sex: string;
  species  : null|Species;
  persons  : Person|null;

  constructor() {
    this.id = null;
    this.name = '';
    this.color = '';
    this.sex = '';
    this.species = null;
    this.persons = null;
  }
}
