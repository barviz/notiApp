import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'api-noticias';
  listadoNoticias: any[] = [];

  /* se inyecta el servicio, noticias.service.ts, en el constructor */
  constructor(private _api: NoticiasService) { }

  /*
  acá se va a consumir el servicio
  */
  buscarNoticias(parametro: any) {
    /*console.log("soy el padre");
    console.log(parametro);*/

    //como la fc devuelve un observable se usa el método subscribe
    //con la funcion flecha acceso a la info almacenada
    this._api.getNoticias(parametro).subscribe((result) => {
      console.log(result);
      this.listadoNoticias = result.articles;
    });
  }
}
