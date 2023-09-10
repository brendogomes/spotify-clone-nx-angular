import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { templateRoutes } from './lib.routes';
import { ContentComponent } from './content/content.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(templateRoutes)],
  declarations: [ContentComponent],
})
export class TemplateModule {}
