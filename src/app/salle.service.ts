import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salle } from './models/salle.model';
import {map} from 'rxjs/operators';
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SalleService {
  private apiURL: string;
  private idSalle: string;

  constructor(private httpClient : HttpClient, private route: ActivatedRoute) { 
    this.apiURL = "http://localhost:5010";
    // this.idSalle = this.route.snapshot.paramMap.get("id");
  }

  getSalles () : Observable<Salle[]> {
    return this.httpClient.get<Salle[]>(`${this.apiURL}/salles`).pipe(
      map(data => data.map(data => new Salle().deserialize(data)))
    );
  }
  // getSalleById () : Observable<Salle> {
  //   return this.httpClient.get<Salle>(`${this.apiURL}/salles/${this.idSalle}`).pipe(
  //     map(data => data.deserialize(data))
  //   );
  // }
}
