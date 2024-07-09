import {Component, OnInit} from '@angular/core';

import {Person} from '../person';
import {PersonService} from "../../person-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    RouterLink,
    FormsModule
  ],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons(): void {
    this.personService.getPersons().subscribe(persons => this.persons = persons);
  }

  deletePerson(id: number): void {
    this.personService.deletePerson(id).subscribe(() => {
      this.persons = this.persons.filter(person => person.id !== id);
    });
  }
}
