import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICep } from './cep.interface';
import { Observable, delay, map, take, Subject } from 'rxjs';

@Injectable()
export class CepService {
  static CEP_API_URL = 'https://viacep.com.br/ws';
  constructor(private http: HttpClient) {}

  private formatUrl(cep: string): string {
    return `${CepService.CEP_API_URL}/${cep}/json`;
  }

  private validate(cep: string) {
    return !!cep && /^\d{8}$/.test(cep);
  }

  search(cep: string): Observable<ICep> {
    if (!this.validate(cep)) {
      const subject = new Subject<ICep>();
      subject.error(new Error('Invalid CEP provided'));
      return subject.asObservable();
    }
    return this.http.get<any>(this.formatUrl(cep)).pipe(
      take(1),
      map((value) => {
        if (value?.erro) throw new Error('Invalid CEP provided');
        return <ICep>value;
      })
    );
  }
}
