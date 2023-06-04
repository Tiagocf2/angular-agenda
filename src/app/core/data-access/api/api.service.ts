import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class ApiServiceConfig {
  baseUrl: string;
  constructor(url: string) {
    this.baseUrl = url;
  }
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl: string;
  constructor(
    @Inject('config') private config: ApiServiceConfig,
    private http: HttpClient
  ) {
    this.baseUrl = config.baseUrl;
  }

  get<T>(
    url: string,
    params: Record<string, string>,
    options: object = {}
  ): Observable<T> {
    return this.http.get<T>(url, {
      ...options,
      params: this.decodeParams(params),
    });
  }

  post<T>(url: string, body: any, options: object = {}): Observable<T> {
    return this.http.post<T>(url, body, {
      ...options,
    });
  }

  private decodeParams(params: any) {
    return new HttpParams({
      fromString: new URLSearchParams(params).toString(),
    });
  }
}
