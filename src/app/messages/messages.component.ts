import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { MessagesService } from './messages.service';
import { IMessageData } from './interfaces/message-data.interface';
import { Message } from './models/message.model';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
})
export class MessagesComponent {
  private _activeMessages: { [index: number]: Message } = {};
  private _subscription?: Subscription;

  get messages(): Message[] {
    return Object.values(this._activeMessages);
  }
  constructor(private messageService: MessagesService) {}

  ngOnInit() {
    this.messageService.subscribe(this.onMessage.bind(this));
  }

  ngOnDestroy() {
    this._subscription?.unsubscribe();
  }

  onMessage(message: IMessageData) {
    if (!message) return;
    const msg = new Message(message);
    this._activeMessages[msg.id] = msg;
    setTimeout(this.deactivateMessage.bind(this), msg.timeout, msg.id);
  }

  deactivateMessage(id: number) {
    let message = this._activeMessages[id];
    if (!message) return;
    message.exit();
  }

  removeMessage(msg: Message) {
    delete this._activeMessages[msg.id];
  }
}
