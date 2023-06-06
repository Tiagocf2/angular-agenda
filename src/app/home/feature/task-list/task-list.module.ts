import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TaskModule } from '../../ui/task/task.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [TaskListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    TaskModule,
    MatDialogModule,
  ],
  exports: [TaskListComponent],
})
export class TaskListModule {}
