import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageRoutingModule } from './homepage-routing.module';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './homepage.component';

// import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, HomePageRoutingModule, MatCardModule],
})
export class HomePageModule {}
