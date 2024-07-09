import {Animals} from "../animals/animals";

export class Person {
  id: number|null;
  firstName: string;
  lastName: string;
  age: number;
  animals: [Animals] | null;

  constructor() {
    this.id = 0;
    this.firstName = '';
    this.lastName = '';
    this.age = 0;
    this.animals = null;
  }
}
