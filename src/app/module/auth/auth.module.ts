import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './view/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

const AUTH_COMPONENTS = [AuthComponent, LoginComponent];

@NgModule({
  declarations: AUTH_COMPONENTS,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [],
})
export class AuthModule {}
