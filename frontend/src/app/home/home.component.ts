import { LivroService } from './../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  litaTopLivros;

  constructor(private livroService: LivroService, private router: Router) {}

  ngOnInit() {
    this.livroService.obterTopLivros().subscribe(result => {
      this.litaTopLivros = result;
    });
  }
}
