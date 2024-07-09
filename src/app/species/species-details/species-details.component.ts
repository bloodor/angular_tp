import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

import {Species} from '../species';
import {SpeciesService} from "../../species-service.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-species-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './species-details.component.html',
  styleUrl: './species-details.component.scss'
})
export class SpeciesDetailsComponent implements OnInit {
  species: Species | undefined;

  constructor(
    private route: ActivatedRoute,
    private speciesService: SpeciesService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getSpecies();
  }

  getSpecies(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.speciesService.getSpeciesById(id).subscribe(species => this.species = species);
  }

  deleteSpecies(id: number): void {
    this.speciesService.deleteSpecies(id).subscribe(() => {
      this.router.navigate(['/species']);
    });
  }
}
