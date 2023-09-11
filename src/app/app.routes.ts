import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('../../modules/auth/src/lib/auth.module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('../../modules/template/src/lib/template.module').then(
        (m) => m.TemplateModule
      ),
  },
];
