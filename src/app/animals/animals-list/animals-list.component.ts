import {Component, OnInit} from '@angular/core';

import {Animals} from '../animals';
import {AnimalsService} from "../../animals-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-species-list',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './animals-list.component.html',
  styleUrl: './animals-list.component.scss'
})
export class AnimalListComponent implements OnInit {
  animals: Animals[] = [];
  filter: string = '';

  constructor(private animalsService: AnimalsService) {
  }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals(): void {
    this.animalsService.getAnimals(this.filter).subscribe(animals => this.animals = animals);
  }

  deleteAnimal(id: number | null) {
    this.animalsService.deleteAnimals(id).subscribe(() => {
      this.animals = this.animals.filter(animal => animal.id !== id);
    });
  }

  applyFilter(eventarget: EventTarget | null): void {
    this.filter = (<HTMLInputElement>eventarget).value;
    this.getAnimals();
  }
}
