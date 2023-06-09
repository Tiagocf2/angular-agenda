import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskControlsComponent } from './task-controls.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TasksModule } from 'src/app/shared/data-access/tasks/tasks.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [TaskControlsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //
    TasksModule,
    //
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  exports: [TaskControlsComponent],
})
export class TaskControlsModule {}
