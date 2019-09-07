import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { GerenciarLivrosRoutingModule } from './gerenciar-livros-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';

@NgModule({
  declarations: [CadastroComponent, ConsultaComponent],
  imports: [
    CommonModule,
    GerenciarLivrosRoutingModule,
    PaginationModule.forRoot()
  ]
})
export class GerenciarLivrosModule {}
