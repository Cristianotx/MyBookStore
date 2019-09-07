import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  private readonly URL_BASE;

  constructor(private http: HttpClient) {
    this.URL_BASE = `${environment.url_api}v1/livro`;
  }

  obterListaLivros(page = 1, itensPerPage = 12) {
    return this.http.get<any[]>(
      `${this.URL_BASE}?page=${page}&itensPerPage=${itensPerPage}`
    );
  }

  obterLivroPorId(id) {
    return this.http.get<any[]>(`${this.URL_BASE}/${id}`);
  }

  obterTopLivros() {
    return this.http.get<any[]>(`${this.URL_BASE}?itensPerPage=5`);
  }
}
