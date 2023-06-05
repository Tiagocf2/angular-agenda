import { NgModule } from '@angular/core';
import { CepService } from './cep.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [CepService],
})
export class CepModule {}
