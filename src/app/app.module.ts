import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { QueryComponent } from './query/query.component';
import { ResultComponent } from './result/result.component';

import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { NavMenu } from './menu/nav-menu.component';
import { MenuList } from './menu/menu-list.component';

import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { HelpComponent } from './pages/help.component';


import { HttpModule } from '@angular/http';
import { WaterService} from './water.service';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    AppComponent, NavMenu, MenuList,

    HomeComponent,
    AboutComponent,
    HelpComponent,
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
    }),
    RouterModule.forRoot([
     {
       path: 'about',
       component: AboutComponent
     },
     {
       path: 'home',
       component: HomeComponent
     },
     {
       path: 'help',
       component: HelpComponent
     },
     {
      path: '',                     // default path
      redirectTo: '/home',
      pathMatch: 'full'
     }

   ])
  ],
  providers: [WaterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
