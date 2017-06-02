import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <h1> About </h1>
    <p> This app is made as a demo, to show off my skills in Angular!</p>
    <p> This app uses The <a href="http://getbootstrap.com/">Bootstrap</a> CSS framework, 
      <a href="https://angular.io/">AngularJS (2)</a> and the Public Water Fountains 
      <a href="https://data.melbourne.vic.gov.au/Assets-Infrastructure/Drinking-fountains/h4ih-tzqs/data"> Dataset </a>
    </p>
    <p> To see the source of this app, please visit <a href="https://github.com/juhsinto/water-fountains-melbourne">this</a> link.</p>
  `
})


export class AboutComponent {

}
