import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskStatsComponent } from './task-stats.component';
import { TaskModule } from '../../ui/task/task.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [TaskStatsComponent],
  imports: [
    CommonModule,
    TaskModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [TaskStatsComponent],
})
export class TaskStatsModule {}
