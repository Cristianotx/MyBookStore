import { LivroService } from './../../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  listaLivros;
  paginacao = {
    page: 1,
    itensPerPage: 15
  };
  constructor(
    private livroService: LivroService,
    private location: Location,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      if (params && params.page && params.itensPerPage) {
        this.paginacao.page = params.page;
        this.paginacao.itensPerPage = params.itensPerPage;
        this.buscar();
      }
    });
  }

  ngOnInit() {}

  private buscar() {
    this.livroService
      .obterListaLivros(this.paginacao.page, this.paginacao.itensPerPage)
      .subscribe(livros => {
        this.listaLivros = livros;
        this.location.go(
          `?page=${this.paginacao.page}&itensPerPage=${this.paginacao.itensPerPage}`
        );
      });
  }

  nextPage() {
    this.paginacao.page -= 1;
  }

  previewsPage() {
    this.paginacao.page += 1;
  }
}
