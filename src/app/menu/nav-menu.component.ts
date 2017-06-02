import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { MenuList } from './menu-list.component';

/* -----------------------------------------------------------------------------
 *  Component that contains the menu items
 *
 */
@Component({
  selector: 'my-menu',
  template: `
    <menu-list
      [menuList]="myMenuItems">
    </menu-list>
  `
})


export class NavMenu {
  myMenuItems: MenuItem[];

  constructor() {
    this.myMenuItems = [
      new MenuItem('HOME', '/home'),
      new MenuItem('ABOUT', '/about'),
      new MenuItem('HELP', '/help'),
      ];
  }
}
