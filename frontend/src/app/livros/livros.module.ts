import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivrosComponent } from './livros.component';
import { LivrosRoutingModule } from './livros-routing.module';

@NgModule({
  declarations: [LivrosComponent],
  imports: [CommonModule, LivrosRoutingModule]
})
export class LivrosModule {}
