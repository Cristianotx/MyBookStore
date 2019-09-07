import { LivroService } from './../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {
  listaLivros: any[];

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit() {
    this.livroService.obterListaLivros().subscribe(livros => {
      this.listaLivros = livros;
    });
  }

  visualizar(livro) {
    this.router.navigate(['livros', livro.id, 'detalhes']);
  }
}
