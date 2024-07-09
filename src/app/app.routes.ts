import {Routes} from '@angular/router';

import {LoginComponent} from "./login/login.component";

import {HomeComponent} from "./home/home.component";

import {SpeciesListComponent} from "./species/species-list/species-list.component";
import {SpeciesDetailsComponent} from "./species/species-details/species-details.component";
import {SpeciesEditComponent} from "./species/species-edit/species-edit.component";
import {SpeciesCreateComponent} from "./species/species-create/species-create.component";

import {PersonListComponent} from "./persons/person-list/person-list.component";
import {PersonDetailsComponent} from "./persons/person-details/person-details.component";
import {PersonEditComponent} from "./persons/person-edit/person-edit.component";
import {PersonCreateComponent} from "./persons/person-create/person-create.component";

import {AnimalListComponent} from "./animals/animals-list/animals-list.component";
import {AnimalCreateComponent} from "./animals/animals-create/animal-create.component";
import {AnimalsEditComponent} from "./animals/species-edit/animals-edit.component";
import {AnimalsDetailsComponent} from "./animals/animals-detail/animals-details.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: 'api-key', component: LoginComponent },

  {path: 'species', component: SpeciesListComponent},
  {path: 'species/details/:id', component: SpeciesDetailsComponent},
  {path: 'species/edit/:id', component: SpeciesEditComponent},
  {path: 'species/create', component: SpeciesCreateComponent},

  {path: 'person', component: PersonListComponent},
  {path: 'person/details/:id', component: PersonDetailsComponent},
  {path: 'person/edit/:id', component: PersonEditComponent},
  {path: 'person/create', component: PersonCreateComponent},

  {path: 'animals', component: AnimalListComponent},
  {path: 'animals/add', component: AnimalCreateComponent},
  {path: 'animals/edit/:id', component: AnimalsEditComponent},
  {path: 'animals/details/:id', component: AnimalsDetailsComponent},

];
