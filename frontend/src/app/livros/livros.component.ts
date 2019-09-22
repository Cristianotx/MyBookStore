import { LivroService } from './../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { of, merge } from 'rxjs';
import { filter, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {
  listaLivros: any[];
  search = new FormControl([]);

  constructor(private livroService: LivroService, private router: Router) {
    this.search.valueChanges
      .pipe(
        filter((v) => v.length > 1 || v.length === 0),
        debounceTime(300)
      )
      .subscribe((res) => this.consultar(res));
  }

  ngOnInit() {
    this.consultar();
  }

  visualizar(livro) {
    this.router.navigate(['livros', livro.id, 'detalhes']);
  }

  consultar(texto = null) {
    this.livroService.obterListaLivros(1, 20, texto).subscribe((livros) => {
      this.listaLivros = livros;
    });
  }
}
