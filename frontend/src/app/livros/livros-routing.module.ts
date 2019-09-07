import { LivrosComponent } from './livros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LivroDetalhesComponent } from './livro-detalhes/livro-detalhes.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LivrosComponent
      },
      {
        path: ':id/detalhes',
        component: LivroDetalhesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule {}
