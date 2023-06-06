import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionBarComponent } from './action-bar.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatModule } from '../../ui/chat/chat.module';
import { AuthService } from 'src/app/auth/data-access/auth.service';
import { TasksModule } from 'src/app/shared/data-access/tasks/tasks.module';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [
    CommonModule,
    ChatModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    TasksModule,
  ],
  providers: [AuthService],
  exports: [ActionBarComponent],
})
export class ActionBarModule {}
