import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('../../modules/template/src/lib/template.module').then(
        (m) => m.TemplateModule
      ), 
  },
];
