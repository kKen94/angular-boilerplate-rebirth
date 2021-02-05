import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { authRoutes } from '@module/auth/auth.routes';
import { AuthModule } from '@module/auth/auth.module';

const routes: Routes = [
  {
    path: 'main',
    canActivate: [AuthGuard],
    loadChildren: (): Promise<unknown> =>
      import('src/app/module/main/main.module').then(m => m.MainModule),
  },
  authRoutes,

  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: '**', redirectTo: 'main' },
];

const config: ExtraOptions = {
  useHash: true,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config), AuthModule],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
