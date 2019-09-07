import { LivroService } from './../../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-livro-detalhes',
  templateUrl: './livro-detalhes.component.html',
  styleUrls: ['./livro-detalhes.component.scss']
})
export class LivroDetalhesComponent implements OnInit {
  livro;

  constructor(
    private route: ActivatedRoute,
    private livroServie: LivroService
  ) {
    route.params.subscribe(params => {
      if (params && params.id) {
        this.obterLivroPorId(params.id);
      }
    });
  }

  ngOnInit() {}

  obterLivroPorId(id) {
    this.livroServie.obterLivroPorId(id).subscribe(result => {
      this.livro = result;
    });
  }
}
