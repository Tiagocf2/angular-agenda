import { MessageType } from '../enums/message-type.enum';

export interface IMessageData {
  type?: MessageType;
  text: string;
}
