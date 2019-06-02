import { Component, OnInit } from '@angular/core';
import { SalleService } from '../salle.service';
import { Salle } from './../models/salle.model';

@Component({
  selector: 'app-salles',
  templateUrl: './salles.component.html',
  styleUrls: ['./salles.component.css']
})
export class SallesComponent implements OnInit {
  private rooms: Salle[];

  constructor(private salleService: SalleService) {
    this.getSalles();
    console.log(this.rooms);
  }

  ngOnInit() {
  }

  getSalles () {
    return this.salleService.getSalles().subscribe( rooms => {
      console.log(rooms);
      this.rooms = rooms;
    });
  }

}
