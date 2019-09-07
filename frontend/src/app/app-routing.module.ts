import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'livros',
    loadChildren: () =>
      import('./livros/livros.module').then(m => m.LivrosModule)
  },
  {
    path: 'gerenciar-livros',
    loadChildren: () =>
      import('./gerenciar-livros/gerenciar-livros.module').then(
        m => m.GerenciarLivrosModule
      )
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
