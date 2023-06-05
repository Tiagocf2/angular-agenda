import { IMessageData } from '../interfaces/message-data.interface';

export type MessageStatus = 'active' | 'exiting';

export class Message {
  private static _id: number = 0;
  static get nextId(): number {
    return this._id++;
  }

  status: MessageStatus = 'active';
  id: number;
  constructor(public message: IMessageData) {
    this.id = Message.nextId;
  }

  exit() {
    this.status = 'exiting';
  }
}
