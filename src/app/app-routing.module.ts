import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';
import { SessionManagerComponent } from './core/feature/session-manager/session-manager.component';
import { PublicRouteGuard } from './shared/feature/route-guard/public-route.guard';
import { PrivateRouteGuard } from './shared/feature/route-guard/private-route.guard';
import { SessionManagerService } from './core/feature/session-manager/session-manager.service';
import { SessionManagerGuard } from './core/feature/session-manager/session-manager.guard';

const routes: Routes = [
  {
    path: '',
    component: SessionManagerComponent,
    // canActivateChild: [SessionManagerGuard],
    children: [
      {
        path: 'home',
        // canActivate: [PrivateRouteGuard],
        loadChildren: () =>
          import('./home/feature/home-shell/home-shell.module').then(
            (module) => module.HomeShellModule
          ),
      },
      {
        path: 'auth',
        canActivate: [PublicRouteGuard],
        loadChildren: () =>
          import('./auth/feature/auth-shell/auth-shell.module').then(
            (m) => m.AuthShellModule
          ),
      },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
