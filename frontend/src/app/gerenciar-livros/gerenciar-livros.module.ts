import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GerenciarLivrosRoutingModule } from './gerenciar-livros-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CadastroComponent, ConsultaComponent],
  imports: [
    CommonModule,
    GerenciarLivrosRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class GerenciarLivrosModule {}
