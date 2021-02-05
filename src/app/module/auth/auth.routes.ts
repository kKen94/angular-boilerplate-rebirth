import { AuthComponent } from './auth.component';
import { LoginComponent } from './view/login/login.component';

export const authRoutes = {
  path: 'auth',
  component: AuthComponent,
  children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    {
      path: 'login',
      component: LoginComponent,
    },
  ],
};
