import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HomePageRoutingModule } from './homepage-routing.module';
import { HomePageComponent } from './homepage.component';
import { ActionBarModule } from '../action-bar/action-bar.module';
import { ProfileModule } from '../profile/profile.module';
import { TaskListModule } from '../task-list/task-list.module';
import { TaskStatsModule } from '../task-stats/task-stats.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    //
    ActionBarModule,
    ProfileModule,
    TaskListModule,
    TaskStatsModule,
    //
    MatCardModule,
    MatGridListModule,
  ],
})
export class HomePageModule {}
