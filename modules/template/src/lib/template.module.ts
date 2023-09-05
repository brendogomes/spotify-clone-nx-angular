import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { templateRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(templateRoutes)],
})
export class TemplateModule {}
