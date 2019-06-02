import { Component, OnInit } from '@angular/core';
const MONTH: string[] = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mais",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  private divMonth: string;
  private divJours: string;
  private clickMois: string;
  private month: string[];
  private show: Boolean;
  private daysInMonth: number;
  private daysOfMonth: number;
  private days: number[];
  private daySelected: number;

  constructor() {
    this.month = MONTH;
    this.show = false;
    this.days = [];
    this.daySelected = null;
    // Construit le tableau des mois
    // this.divMonth = null;
    // for (var i = 0; i < MONTH.length; i++) {
    //   let j = i + 1;
    //   if (this.divMonth == null) {
    //     this.divMonth = `<div id="${j}" class="mois" (click)="handleClick($event)">${MONTH[i]} ${j}</div>`;
    //   } else {
    //     this.divMonth += `<div id="${j}" class="mois" (click)="handleClick($event)">${MONTH[i]} ${j}</div>`;
    //   }
    // }
    // Construit le tableau des jours
  }

  ngOnInit() {
  }

  handleClick(event) {
    console.log(event);
  }

  displayMonth(numMonth) {
    
    if ( !this.show ) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  daysInMonthCalendar(numMonth): void {
    this.daysOfMonth = new Date(new Date().getFullYear(), numMonth, 0).getDate();
    this.getDaysOfMonth();
    console.log(this.daysOfMonth);
  }
  getDaysOfMonth (): void {
    this.days = [];
    for (let i = 0; i < this.daysOfMonth; i++) {
      this.days.push(i + 1);
    }
    console.log(this.days);
  }

  addTimeSlot (day): void {
    // Récupérer les horaire déjà enregistré (si existe)
    
  }
}
