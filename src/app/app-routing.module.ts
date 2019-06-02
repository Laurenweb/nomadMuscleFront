import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { SallesComponent } from './salles/salles.component';
// import { DetailSalleComponent } from './detail-salle/detail-salle.component';

const routes: Routes = [
  {
    path: 'salles',
    component: SallesComponent
  },
  // {
  //   path: 'salles/:id',
  //   component: DetailSalleComponent
  // }, 
  // {
  // path: 'reservation',
  //   component: CalendarComponent
  // },
  {
    path: '**',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
