import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { authRoutes } from './lib.routes';
import { LoginComponent } from './login/login.component';
import { UiButtonComponent } from 'modules/shared/ui';

@NgModule({
  imports: [CommonModule, UiButtonComponent, RouterModule.forChild(authRoutes)],
  declarations: [LoginComponent],
})
export class AuthModule {}
