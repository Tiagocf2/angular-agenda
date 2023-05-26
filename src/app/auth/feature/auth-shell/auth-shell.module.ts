import { NgModule } from '@angular/core';

import { AuthShellRoutingModule } from './auth-shell-routing.module';
import { LoginModule } from '../login/login.module';

import { AuthLayoutComponent } from '../../ui/auth-layout/auth-layout.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [AuthShellRoutingModule, LoginModule, MatCardModule],
  declarations: [AuthLayoutComponent],
})
export class AuthShellModule {}
