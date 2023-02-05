import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  /*
  output: decorador que sirve para
  enviar datos fuera de un componente
  */
  /* los datos de este form, categoria y paises, que se seleccionarán
  son los que se van a pasar al componente que luego de recibir esta info va a realizar la
  búsqueda */
  @Output() parametrosSeleccionados = new EventEmitter<any>();

  categoriaSeleccionada = 'general';
  paisSeleccionado = 'ar';

  categorias: any[] = [
    { value: 'general', nombre: 'General' },
    { value: 'business', nombre: 'Negocios' },
    { value: 'entertaiment', nombre: 'Entretenimientos' },
    { value: 'health', nombre: 'Salud' },
    { value: 'science', nombre: 'Ciencia' },
    { value: 'sports', nombre: 'Deportes' },
    { value: 'technology', nombre: 'Tecnología' },
  ]

  paises: any[] = [
    { value: 'ar', nombre: 'Argentina' },
    { value: 'br', nombre: 'Brasil' },
    { value: 'co', nombre: 'Colombia' },
    { value: 'jp', nombre: 'Japón' },
    { value: 'us', nombre: 'Estados Unidos' },
    { value: 'gb', nombre: 'Reino Unido' },
    { value: 'rs', nombre: 'Rusia' },
  ]

  constructor() {}

  ngOnInit(): void {

  }

  buscarNoticia(){

    /*console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);*/

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }

}
