import { Component } from '@angular/core';

@Component({
  selector: 'help',
  template: `
    <h1> Help </h1>
    <p> This app is simple to use, simply share GPS permissions </p>
    <p> For the chrome/chromium browser, since GPS permissions is disabled for non-HTTPS websites, </p>
    <p> unfortunately, in that case you'd have to manually enter your GPS coordinates. Sorry. </p>
  `,
  styleUrls: ['../app.component.css']
})


export class HelpComponent {

}
