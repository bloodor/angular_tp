import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

import {NgIf} from "@angular/common";
import {Animals} from "../animals";
import {AnimalsService} from "../../animals-service.service";

@Component({
  selector: 'app-animals-details',
  standalone: true,
  imports: [
    NgIf,
    RouterLink
  ],
  templateUrl: './animals-details.component.html',
  styleUrl: './animals-details.component.scss'
})
export class AnimalsDetailsComponent implements OnInit {
  animals: Animals | undefined;

  constructor(
    private route: ActivatedRoute,
    private animalsService: AnimalsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animalsService.getAnimalsById(id).subscribe(animal => this.animals = animal);
  }

  deleteAnimals(id: number | null): void {
    this.animalsService.deleteAnimals(id).subscribe(() => {
      this.router.navigate(['/animals']);
    });
  }
}
