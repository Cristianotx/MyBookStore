import { environment } from './../../../environments/environment';
import { LivroService } from './../../shared/livro.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenerosService } from '../shared/generos.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  form;
  listaGeneros;
  fileToUpload: File;

  urlUploadArquivo = `${environment.url_api}v1/arquivo/upload`;

  constructor(
    private fb: FormBuilder,
    private livroService: LivroService,
    private generosService: GenerosService
  ) {
    this.construirFormulario();
  }

  ngOnInit() {
    this.carregarListaGeneros();
  }

  onUpload(event) {
    const urlCapa = `${environment.url_api}${event}`;
    this.form.get('urlCapa').setValue(urlCapa);
  }

  adicionarLink(link) {
    let links = this.form.get('links').value;

    if (link.value && (!links || !links.find(x => x === link.value))) {
      links = [...links, link.value];
    }

    this.form.get('links').setValue(links);
    link.value = '';
  }

  removerLink(link) {
    let links = this.form.get('links').value;
    links = links.filter(x => x !== link);
    this.form.get('links').setValue(links);
  }

  adicionarGenero(genero) {
    let generos = this.form.get('generos').value || '';

    if (
      this.listaGeneros.find(x => x === genero.value) &&
      (!generos || !generos.find(x => x === genero.value))
    ) {
      generos = [...generos, genero.value];
    }

    this.form.get('generos').setValue(generos);
    genero.value = '';
  }

  removeGenero(genero) {
    let generos = this.form.get('generos').value;
    generos = generos.filter(x => x !== genero);
    this.form.get('generos').setValue(generos);
  }

  private carregarListaGeneros() {
    this.generosService
      .obterListaGeneros()
      .subscribe(listaGeneros => (this.listaGeneros = listaGeneros));
  }

  submit() {
    if (this.form.valid) {
      const model = this.form.getRawValue();
      this.livroService.cadastrar(model).subscribe(result => {
        console.log('Cadastrado com sucesso..');
        this.form.reset();
      });
    }
  }

  private construirFormulario() {
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      generos: ['', Validators.required],
      dataPublicacao: [null, Validators.required],
      paginas: [0, Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      descricao: ['', Validators.required],
      sinopse: ['', Validators.required],
      links: ['', Validators.required],
      urlCapa: [null, Validators.required]
    });
  }
}
