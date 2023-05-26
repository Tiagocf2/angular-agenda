import { APP_TITLE, APP_TITLE_SEPARATOR } from './constants';

export abstract class TitleHelper {
  static title = APP_TITLE;
  static separator = APP_TITLE_SEPARATOR;
  static format(text: string): string {
    return `${this.title} ${this.separator} ${text}`;
  }
}
