import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-species-create',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './species-create.component.html',
  styleUrl: './species-create.component.scss'
})
export class SpeciesCreateComponent implements OnInit {
  species: Partial<Species> = {
    commonName: '',
    latinName: '',
  }

  constructor(
    private router: Router,
    private speciesService: SpeciesService
  ) {
  }

  ngOnInit(): void {
  }

  createSpecies(): void {
    this.speciesService.createSpecies(this.species).subscribe((newSpecies) => this.router.navigate(['/species/details', newSpecies.id]));
  }

  cancel(): void {
    this.router.navigate(['/species']);
  }
}
