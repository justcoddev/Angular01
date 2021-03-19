import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  comentarios: any[] = [
    // arrego
    {
      nombre: 'Edison Cruz',
      alias: ' @teddy221b',
      comentario: 'Framework Angular sigue evolucionando',
    },
    {
      nombre: 'Paul Cruz',
      alias: ' @pool',
      comentario: 'el mundo de Angular',
    },
  ];

  nombre: any;
  comentario: any;

  constructor() {}

  ngOnInit(): void {}

  agregarComentario(): void {
    console.log(this.nombre);
    console.log(this.comentario);

    const comentarioAux = {
      // es let pero me obligo a ponerle const
      nombre: this.nombre,
      alias: `@ ${this.nombre}`,
      comentario: this.comentario,
    };
    this.comentarios.push(comentarioAux);
  }
  eliminar(indice: any): void {
    this.comentarios.splice(indice, 1);
  }
}
