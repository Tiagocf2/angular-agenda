import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MessagesService } from './messages.service';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './ui/message/message.component';

@NgModule({
  declarations: [MessagesComponent, MessageComponent],
  providers: [MessagesService],
  imports: [CommonModule],
  exports: [MessagesComponent],
})
export class MessagesModule {
  static forRoot(): ModuleWithProviders<MessagesModule> {
    return {
      ngModule: MessagesModule,
      // providers: [{ provide: 'ApiConfig', useValue: config }],
    };
  }
}
