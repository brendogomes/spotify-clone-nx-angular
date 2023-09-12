import { Route } from '@angular/router';
import { userIsAuthenticatedResolver } from './resolvers/user-authentication-resolver';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'web-player', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('../../modules/auth/src/lib/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: 'web-player',
    loadChildren: () =>
      import('../../modules/template/src/lib/template.module').then(
        (m) => m.TemplateModule
      ),
    resolve: {
      isAuthenticated: userIsAuthenticatedResolver,
    },
  },
];
