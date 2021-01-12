import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  //   canActivate: [AuthGuard],
  // },
  // { path: '**', redirectTo: '' },
  {
    path: 'user',
    canActivate: [AuthGuard],
    loadChildren: (): Promise<unknown> =>
      import('src/app/module/user/user-layout.module').then(
        m => m.UserLayoutModule,
      ),
  },
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
