import { NgModule } from '@angular/core';
import { UserRoutingModule } from './user-routing.module';
import { UserModule } from './view/user/user.module';
import { UserLayoutComponent } from './user-layout.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UserLayoutComponent],
  imports: [
    UserModule,
    UserRoutingModule,
    TranslateModule.forChild({ extend: true, isolate: false }),
  ],
})
export class UserLayoutModule {}
