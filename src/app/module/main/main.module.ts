import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardModule } from './view/dashboard/dashboard.module';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { NgxProgressModule } from '@kken94/ngx-progress';
import { VerticalLayout1Module } from '../../layout/view/vertical/layout-1/layout-1.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    DashboardModule,
    NgxProgressModule,
    VerticalLayout1Module,
  ],
})
export class MainModule {}
