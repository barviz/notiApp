import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

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
    console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);
  }

}
