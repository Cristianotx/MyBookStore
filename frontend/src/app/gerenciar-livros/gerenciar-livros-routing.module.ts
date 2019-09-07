import { CadastroComponent } from './cadastro/cadastro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ConsultaComponent
  },
  {
    path: 'consulta',
    component: ConsultaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: ':id/editar',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenciarLivrosRoutingModule {}
