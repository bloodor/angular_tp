import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SpeciesService} from "../../species-service.service";
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AnimalsService} from "../../animals-service.service";
import {Animals} from "../animals";
import {Species} from "../../species/species";

@Component({
  selector: 'app-species-edit',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    ReactiveFormsModule,
    NgForOf
  ],
  templateUrl: './animals-edit.component.html',
  styleUrl: './animals-edit.component.scss'
})
export class AnimalsEditComponent implements OnInit {
  animals: Animals | undefined;
  species: Species[] = [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private speciesService: SpeciesService,
    private animalsService: AnimalsService,
  ) {
  }

  ngOnInit(): void {
    this.getAnimal();
    this.speciesService.getSpecies()
      .subscribe(countries => {
        this.species = countries as Species[];
      })
  }

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animalsService.getAnimalsById(id).subscribe(animal => this.animals = animal);
  }

  saveAnimal(): void {
    if (this.animals != null) {
      let nbEspece = this.animals.species;
      this.animals.species = this.species[nbEspece as unknown as number - 1];
    }
    if (this.animals) {
      console.log(this.animals)
      this.animalsService.updateAnimals(this.animals).subscribe(() => this.router.navigate(['/animals']));
    }
  }

  cancel(): void {
    this.router.navigate(['/animals']);
  }
}
