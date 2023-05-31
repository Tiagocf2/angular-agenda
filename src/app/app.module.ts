import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { SignupComponent } from './auth/feature/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/ui/not-found/not-found.component';
import { StoreModuleWithConfig } from './core/data-access/store';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    StoreModuleWithConfig,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
