import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';

export interface RequestOptions {
  auth?: boolean;
  [key: string]: any;
}

export interface ApiServiceConfig {
  baseUrl: string | '';

  baseHeaders:
    | Record<string, string | number | (string | number)[]>
    | undefined;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private _config: ApiServiceConfig;
  get url() {
    return this._config.baseUrl;
  }
  get headers() {
    return this._config.baseHeaders;
  }

  constructor(
    @Inject('ApiConfig') private config: ApiServiceConfig,
    private http: HttpClient,
    private sessionService: SessionService
  ) {
    this._config = config;
  }

  get<T>(
    url: string,
    params?: Record<string, string>,
    options: RequestOptions = {}
  ): Observable<T> {
    return this.http.get<T>(this.url + url, {
      ...options,
      headers: this.buildHeaders(options),
      params: this.decodeParams(params),
    }) as Observable<T>;
  }

  post<T>(url: string, body: any, options: RequestOptions = {}): Observable<T> {
    return this.http.post<T>(this.url + url, body, {
      ...options,
      headers: this.buildHeaders(options),
    });
  }

  private buildHeaders(options?: RequestOptions): Record<string, any> {
    if (!options) return new HttpHeaders(this.headers);
    const headers: Record<string, any> = {};
    if (options.auth) {
      const token = this.sessionService.retrieve().access_token;
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return new HttpHeaders({ ...headers, ...this.headers });
  }

  private decodeParams(params: any) {
    return new HttpParams({
      fromString: new URLSearchParams(params).toString(),
    });
  }
}
