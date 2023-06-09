import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AppComponent } from './app.component';
import { SessionManagerComponent } from './core/feature/session-manager/session-manager.component';
import { PreloaderComponent } from './core/ui/preloader/preloader.component';

import { AppRoutingModule } from './app-routing.module';
import { ApiModule } from './core/data-access/api/api.module';
import { SessionModule } from './core/data-access/session/session.module';
import { MessagesModule } from './messages/messages.module';
import { StoreModuleWithConfig } from './core/data-access/store';

import { PrivateRouteGuard } from './shared/feature/route-guard/private-route.guard';
import { PublicRouteGuard } from './shared/feature/route-guard/public-route.guard';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, SessionManagerComponent, PreloaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModuleWithConfig,
    SessionModule,
    ApiModule.forRoot({
      baseUrl: environment.API_URL,
      baseHeaders: { 'Content-Type': 'application/json' },
    }),
    MessagesModule.forRoot(),
    MatProgressBarModule,
  ],
  providers: [PrivateRouteGuard, PublicRouteGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
