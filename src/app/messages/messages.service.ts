import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { IMessageData } from './interfaces/message-data.interface';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private observable: Subject<IMessageData>;

  constructor() {
    this.observable = new Subject<IMessageData>();
  }

  subscribe(fun: (value: IMessageData) => void): Subscription {
    return this.observable.subscribe(fun);
  }

  showMessage(message: IMessageData) {
    this.observable.next(message);
  }
}
