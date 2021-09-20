import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  nombre : String;

  lista :[];

  listado: [

    {



    }
  ]
  
  constructor() {
    this.nombre ="nombre"
    
   }

  ngOnInit() {
  }

}
