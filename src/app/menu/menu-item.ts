/*
 *  Object structure for storing menu items
 */
export class MenuItem {
  menuItem: string;
  url: string;

  constructor(menuItem: string, url: string) {
    this.menuItem = menuItem;
    this.url = url;
  }
}
