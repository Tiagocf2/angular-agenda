import { HttpErrorResponse } from '@angular/common/http';
import {
  APP_DEFAULT_ERROR_MESSAGE,
  APP_TITLE,
  APP_TITLE_SEPARATOR,
} from './constants';
import { ICep } from '../data-access/cep/cep.interface';

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

export const formatCepToAdress = (cep: ICep): string => {
  let address = cep.logradouro;
  if (cep.complemento) address += `, ${cep.complemento}`;
  let local = cep.bairro;
  if (local) {
    local += `, ${cep.localidade}`;
  } else {
    local = cep.localidade;
  }
  if (local) address += ` - ${local}`;

  if (cep.uf) address += ` - ${cep.uf}`;
  return address;
};
