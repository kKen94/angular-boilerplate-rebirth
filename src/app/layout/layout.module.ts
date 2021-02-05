import { LayoutService } from './layout.service';
import { NgModule } from '@angular/core';
import { VerticalLayout1Module } from './view/vertical/layout-1/layout-1.module';

const LAYOUTS = [VerticalLayout1Module];

@NgModule({
  imports: [...LAYOUTS],
  exports: [...LAYOUTS],
  providers: [LayoutService],
})
export class LayoutModule {}
