import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './core/data-access/api/api.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionModule } from './core/data-access/session/session.module';

import { StoreModuleWithConfig } from './core/data-access/store';
import { environment } from 'src/environments/environment';
import { MessagesModule } from './messages/messages.module';

@NgModule({
  declarations: [AppComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
