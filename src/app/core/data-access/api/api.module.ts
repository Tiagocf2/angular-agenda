import { NgModule, ModuleWithProviders } from '@angular/core';
import { ApiService, ApiServiceConfig } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({ imports: [HttpClientModule], providers: [ApiService] })
export class ApiModule {
  static forRoot(config: ApiServiceConfig): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [{ provide: 'ApiConfig', useValue: config }],
    };
  }
}
