import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ContentModule } from '../../../component/content/content.module';
import { HeaderModule } from '../../../component/header/header.module';
import { NavbarVerticalModule } from '../../../component/sidenav/vertical/navbar-vertical.module';
import { QuickPanelModule } from '../../../component/quick-panel/quick-panel.module';
import { VerticalLayout1Component } from './layout-1.component';

@NgModule({
  declarations: [VerticalLayout1Component],
  imports: [
    ContentModule,
    NavbarVerticalModule,
    HeaderModule,
    QuickPanelModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [VerticalLayout1Component],
})
export class VerticalLayout1Module {}
