import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  /*decorador que recibe la data entrante del
  componente app.component.ts más especificamente
  de la variable listadoNoticias (ver app.component.html)
   */
  @Input() listNoticias:any;

  constructor(){}

  ngOnInit(): void {

  }

}
