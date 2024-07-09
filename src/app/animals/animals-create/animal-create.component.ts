import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Animals} from '../animals';
import {FormsModule} from '@angular/forms';
import {AnimalsService} from '../../animals-service.service';
import {Species} from '../../species/species';
import {HttpClient} from '@angular/common/http';
import {SpeciesService} from '../../species-service.service';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-animal-create',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.scss']
})
export class AnimalCreateComponent implements OnInit {
  animals: Animals = new Animals();
  species: Species[] = [];

  constructor(
    private router: Router,
    private animalsService: AnimalsService,
    private speciesService: SpeciesService,
  ) {
  }

  async ngOnInit(): Promise<void> {
    this.speciesService.getSpecies()
      .subscribe(countries => {
        this.species = countries as Species[];
      })
  }


  async createAnimal(): Promise<void> {
    if (this.animals.species != null) {
      this.animals.id = null;
      let nbEspece = this.animals.species;
      this.animals.species = this.species[nbEspece as unknown as number - 1];
    }
    this.animalsService.createAnimals(this.animals).subscribe(() => this.router.navigate(['/animals']));
  }
  cancel(): void {
    this.router.navigate(['/animals']);
  }
}
