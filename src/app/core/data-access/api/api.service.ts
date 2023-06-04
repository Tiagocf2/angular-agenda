import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

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

  get(url: string, params: Record<string, string>, options: object = {}) {
    this.http.get(url, {
      ...options,
      params: this.decodeParams(params),
    });
  }
  private decodeParams(params: any) {
    return new HttpParams({
      fromString: new URLSearchParams(params).toString(),
    });
  }
}
