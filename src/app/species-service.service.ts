import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Species} from "./species/species";


@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private apiUrl = 'http://localhost:8080/api/species';

  constructor(private http: HttpClient) { }

  getSpecies(filter?: string): Observable<Species[]> {
    let params = new HttpParams();
    if (filter) {
      params = params.append('contains', filter);
    }
    return this.http.get<Species[]>(this.apiUrl, { params });
  }

  getSpeciesById(id: number): Observable<Species> {
    return this.http.get<Species>(`${this.apiUrl}/${id}`);
  }

  createSpecies(species: Partial<Species>): Observable<Species> {
    return this.http.post<Species>(this.apiUrl, species);
  }

  updateSpecies(species: Species): Observable<Species> {
    return this.http.put<Species>(`${this.apiUrl}/${species.id}`, species);
  }

  deleteSpecies(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
