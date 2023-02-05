import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  /* luego de haber importado en module.ts
  se inyecta HttpClient en el constructor */
  constructor(private http: HttpClient) { }

  getNoticias(parametros: any): Observable<any> { //retorna un observable!
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=4599facd49bb475b8979ba6445231a2c';
    return this.http.get(URL); //se llama, a la variable inyectada http, el método get
  }
}
