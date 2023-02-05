import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /*
  decorador que sirve para
  recibir datos
  */
  @Input() titulo: string;

  constructor() {
    this.titulo = '';
  }


  /*
  método que se ejecuta cuando se inicializa la página,
  por única vez carga todo lo que contiene adentro
  */
  ngOnInit(): void {

  }
}
