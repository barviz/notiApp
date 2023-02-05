import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-noticias';

  /*
  acá se va a consumir el servicio
  */
  buscarNoticias(parametro: any) {
    console.log("soy el padre");
    console.log(parametro);
  }

}
