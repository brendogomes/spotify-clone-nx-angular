import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { templateRoutes } from './lib.routes';
import { ContentComponent } from './content/content.component';
import { PlayerComponent } from 'modules/player';
import { MainContentComponent } from 'modules/main-content';
import { PlaylistComponent } from 'modules/playlist';
import { SearchComponent } from 'modules/search';
import { UiCardComponent } from 'modules/shared/ui';

@NgModule({
  imports: [
    CommonModule,
    SearchComponent,
    PlaylistComponent,
    MainContentComponent,
    PlayerComponent,
    UiCardComponent,
    RouterModule.forChild(templateRoutes),
  ],
  declarations: [ContentComponent],
})
export class TemplateModule {}
