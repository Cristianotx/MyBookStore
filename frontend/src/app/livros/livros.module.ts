import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosComponent } from './livros.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivroDetalhesComponent } from './livro-detalhes/livro-detalhes.component';

@NgModule({
  declarations: [LivrosComponent, LivroDetalhesComponent],
  imports: [CommonModule, LivrosRoutingModule, ReactiveFormsModule]
})
export class LivrosModule {}
