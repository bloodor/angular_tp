import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';

import {Person} from '../person';
import {PersonService} from "../../person-service.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.scss'
})
export class PersonDetailsComponent implements OnInit {
  person: Person | undefined; // Explicitly define the type here

  constructor(
    private route: ActivatedRoute,
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
}
