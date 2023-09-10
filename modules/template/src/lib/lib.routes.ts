import { Route } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const templateRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: ContentComponent },
];
