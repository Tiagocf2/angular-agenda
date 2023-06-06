import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ChatComponent],
  imports: [CommonModule, MatInputModule, MatIconModule, MatButtonModule],
  exports: [ChatComponent],
})
export class ChatModule {}
