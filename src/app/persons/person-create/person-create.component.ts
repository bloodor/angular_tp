import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Person} from '../person';
import {PersonService} from "../../person-service.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-person-create',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './person-create.component.html',
  styleUrl: './person-create.component.scss'
})
export class PersonCreateComponent implements OnInit {
  person: { firstName: string; lastName: string; animals: undefined; id: null; age: undefined } = {
    animals: undefined,
    id: null,
    firstName: '',
    lastName: '',
    age: undefined
  }

  constructor(
    private router: Router,
    private personService: PersonService
  ) {
  }

  ngOnInit(): void {
  }

  async createPerson(): Promise<void> {
    this.personService.createPerson(this.person).subscribe(() => this.router.navigate(['/person']));
  }

  cancel(): void {
    this.router.navigate(['/person']);
  }
}
