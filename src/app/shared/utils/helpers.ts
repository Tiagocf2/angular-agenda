import { HttpErrorResponse } from '@angular/common/http';
import {
  APP_DEFAULT_ERROR_MESSAGE,
  APP_TITLE,
  APP_TITLE_SEPARATOR,
} from './constants';

export abstract class TitleHelper {
  static title = APP_TITLE;
  static separator = APP_TITLE_SEPARATOR;
  static format(text: string): string {
    return `${this.title} ${this.separator} ${text}`;
  }
}

export const errorParser = (error: any) => {
  if (error instanceof HttpErrorResponse) {
    return (
      error.error.message ||
      error.error.error ||
      error.error.err ||
      `${error.statusText} (${error.status}): ${APP_DEFAULT_ERROR_MESSAGE}`
    );
  }
};
