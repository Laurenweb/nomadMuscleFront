import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CalendarComponent } from './calendar/calendar.component';
import { SallesComponent } from './salles/salles.component';
import { SalleService } from './salle.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailSalleComponent } from './detail-salle/detail-salle.component';

@NgModule({
  declarations: [
    AppComponent,
    // CalendarComponent,
    SallesComponent,
    DetailSalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
