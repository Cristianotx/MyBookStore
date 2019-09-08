import { LivroService } from './../../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  formSearch;
  listaLivros;
  paginacao = {
    page: 1,
    itensPerPage: 5
  };
  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.formSearch = this.fb.group({
      texto: []
    });

    this.route.queryParams.subscribe(params => {
      if (params && params.page && params.itensPerPage) {
        this.paginacao.page = +params.page;
        this.paginacao.itensPerPage = +params.itensPerPage;
      }
    });
  }

  ngOnInit() {
    this.buscar();
  }

  pesquisar() {
    const texto = this.formSearch.get('texto').value;
    if (texto) {
      this.paginacao.page = 1;
      this.buscar(texto);
    } else {
      this.buscar();
    }
  }

  private buscar(texto = null) {
    this.livroService
      .obterListaLivros(this.paginacao.page, this.paginacao.itensPerPage, texto)
      .subscribe(livros => {
        this.listaLivros = livros;
        let route = `gerenciar-livros?page=${this.paginacao.page}&itensPerPage=${this.paginacao.itensPerPage}`;
        if (texto) {
          route += `&texto=${texto}`;
        }
        this.location.go(route);
      });
  }
  cadastrarNovo() {
    this.router.navigate(['/gerenciar-livros', 'cadastro']);
  }

  editar(id) {
    this.router.navigate(['/gerenciar-livros', id, 'edicao']);
  }

  nextPage() {
    this.paginacao.page -= 1;
    this.buscar();
  }

  previewsPage() {
    this.paginacao.page += 1;
    this.buscar();
  }

  excluir(id) {
    this.livroService.excluir(id).subscribe(res => {
      this.buscar();
    });
  }
}
