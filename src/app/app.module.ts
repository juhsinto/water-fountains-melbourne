import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QueryComponent } from './query/query.component';
import { ResultComponent } from './result/result.component';
import {WaterService} from './water.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent,
    QueryComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzZ_EjaRw0gL9-CYp3szzh_IPfOoEws5A'
    })
  ],
  providers: [WaterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
