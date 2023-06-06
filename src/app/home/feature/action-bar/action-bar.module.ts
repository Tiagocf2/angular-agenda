import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionBarComponent } from './action-bar.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ChatModule } from '../../ui/chat/chat.module';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [
    CommonModule,
    ChatModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ActionBarComponent],
})
export class ActionBarModule {}
