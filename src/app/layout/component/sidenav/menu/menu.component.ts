import { Component } from '@angular/core';
import { MENU } from './menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent {
  menu = MENU;

  constructor(public router: Router) {}

  async goTo(routerLink: string): Promise<void> {
    if (routerLink) {
      await this.router.navigateByUrl(routerLink);
    }
  }
}
