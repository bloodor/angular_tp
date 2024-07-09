import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Animals} from "./animals/animals"

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  private apiUrl = 'http://localhost:8080/api/animal';

  constructor(private http: HttpClient) {
  }

  getAnimals(filter?: string): Observable<Animals[]> {
    let params = new HttpParams();
    if (filter) {
      params = params.append('contains', filter);
    }
    return this.http.get<Animals[]>(this.apiUrl, {params});
  }

  getAnimalsById(id: number): Observable<Animals> {
    return this.http.get<Animals>(`${this.apiUrl}/${id}`);
  }

  createAnimals(Animals: Animals): Observable<Animals> {
    return this.http.post<Animals>(this.apiUrl, Animals);
  }

  updateAnimals(Animals: Animals): Observable<Animals> {
    return this.http.put<Animals>(`${this.apiUrl}/${Animals.id}`, Animals);
  }

  deleteAnimals(id: number | null): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
