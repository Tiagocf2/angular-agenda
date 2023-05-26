import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../ui/auth-layout/auth-layout.component';
import { TitleHelper } from 'src/app/shared/utils/helpers';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('../login/login.module').then((m) => m.LoginModule),
        title: TitleHelper.format('Login'),
      },
      {
        path: 'cadastro',
        loadChildren: () =>
          import('../signup/signup.module').then((m) => m.SignupModule),
        title: TitleHelper.format('Login'),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthShellRoutingModule {}
