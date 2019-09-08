import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {
  private readonly URL_BASE;

  constructor(private http: HttpClient) {
    this.URL_BASE = `${environment.url_api}v1/generos`;
  }

  obterListaGeneros() {
    return this.http.get(this.URL_BASE);
  }
}
