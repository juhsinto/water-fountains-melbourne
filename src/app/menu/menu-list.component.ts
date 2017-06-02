import { Input, Component } from '@angular/core';
import { MenuItem } from './menu-item';
/* -----------------------------------------------------------------------------
 *  Component for the menu listing
 *
 */
@Component({
  selector: 'menu-list',
  template: `
  <ul class="nav navbar-nav">
    <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}" *ngFor="let item of menuList">
      <a routerLink="{{ item.url }}">{{ item.menuItem }}</a>
    </li>
  </ul>



  `
})

export class MenuList {

@Input() menuList: MenuItem[];

}
