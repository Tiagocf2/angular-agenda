import { MessageType } from '../enums/message-type.enum';

export interface IMessageData {
  text: string;
  type?: MessageType;
  timeout?: number;
}
