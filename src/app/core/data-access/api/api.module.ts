import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiService, ApiServiceConfig } from './api.service';

@NgModule({ providers: [ApiService] })
export class ApiModule {
  static forRoot(config: ApiServiceConfig): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: ApiServiceConfig, useValue: config }],
    };
  }
}
