import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from './models/salle.model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiURL: string;
  private idSalle: string;

  constructor(private httpClient : HttpClient) { 
    this.apiURL = "http://localhost:5010";
  }

  getSalles () : Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(`${this.apiURL}/salles`).pipe(
      map(data => data.map(data => new Salle().deserialize(data)))
    );
  }
  getSalleById (id: string) : Observable<Salle> {
    return this.httpClient.get<Salle>(`${this.apiURL}/salles?idsalle=${id}`);
  }
}
