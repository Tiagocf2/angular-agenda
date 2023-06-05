import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IMessageData } from './interfaces/message-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private observable: BehaviorSubject<IMessageData>;

  constructor() {
    this.observable = new BehaviorSubject<IMessageData>({ text: '' });
  }

  subscribe(fun: (value: IMessageData) => void): Subscription {
    return this.observable.subscribe(fun);
  }

  showMessage(message: IMessageData) {
    this.observable.next(message);
  }
}
