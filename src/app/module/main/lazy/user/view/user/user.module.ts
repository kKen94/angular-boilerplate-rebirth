import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [UserComponent],
  imports: [TranslateModule],
})
export class UserModule {}
