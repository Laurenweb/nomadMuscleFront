import { Component, OnInit } from '@angular/core';
import { SalleService } from '../salle.service';
import { ActivatedRoute } from "@angular/router";
import { Salle } from '../models/salle.model';

@Component({
  selector: 'app-detail-salle',
  templateUrl: './detail-salle.component.html',
  styleUrls: ['./detail-salle.component.css']
})
export class DetailSalleComponent implements OnInit {
  private idSalle: string;
  private room: Salle;

  constructor(private salleService: SalleService, private route: ActivatedRoute) {
    this.idSalle = this.route.snapshot.paramMap.get("id");
    this.salleService.getSalleById(this.idSalle).subscribe(salle => this.room = salle);
   }

  ngOnInit() {
  }

}
