import { MESSAGE_DEFAULT_TIMEOUT } from '../constants/messages.constants';
import { MessageType } from '../enums/message-type.enum';
import { IMessageData } from '../interfaces/message-data.interface';

export type MessageStatus = 'active' | 'exiting';

export class Message {
  private static _id: number = 0;
  static get nextId(): number {
    return this._id++;
  }

  status: MessageStatus = 'active';
  id: number;
  message: string;
  timeout: number;
  type: MessageType;
  constructor(message: IMessageData) {
    this.id = Message.nextId;
    this.message = message.text;
    this.timeout = message.timeout || MESSAGE_DEFAULT_TIMEOUT;
    this.type = message.type || MessageType.DEFAULT;
  }

  exit() {
    this.status = 'exiting';
  }
}
