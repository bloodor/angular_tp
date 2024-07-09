import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Person} from '../person';
import {PersonService} from "../../person-service.service";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-person-edit',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './person-edit.component.html',
  styleUrl: './person-edit.component.scss'
})
export class PersonEditComponent implements OnInit {
  person: Person | undefined; // Explicitly define the type here

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) {
  }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personService.getPersonById(id).subscribe(person => this.person = person);
  }

  savePerson(): void {
    if (this.person) {
      this.personService.updatePerson(this.person).subscribe(() => this.router.navigate(['/person/details', this.person?.id]));
    }
  }

  cancel(): void {
    this.router.navigate(['/person/details', this.person?.id]);
  }
}
