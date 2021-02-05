import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuModule } from '../menu/menu.module';
import { NavbarVerticalComponent } from './navbar-vertical.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@NgModule({
  declarations: [NavbarVerticalComponent],
  imports: [CommonModule, MenuModule, MatButtonModule, MatRippleModule],
  exports: [NavbarVerticalComponent],
})
export class NavbarVerticalModule {}
