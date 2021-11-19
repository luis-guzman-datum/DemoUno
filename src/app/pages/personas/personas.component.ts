import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss'],
})
export class PersonasComponent implements OnInit {
  nombre: string = '';
  apellidos: string = '';
  edad: string = '';

  error: string = '';

  listaPersonas: any[] = [];

  pantalla: string = 'lista';

  constructor() {}

  ngOnInit(): void {}

  agregar() {
    //validaciones
    if (this.nombre.trim() == '') {
      this.error = 'Nombre esta vacio!';
    } else if (this.apellidos.trim() == '') {
      this.error = 'Apellido esta vacio!';
    } else if (this.edad == '') {
      this.error = 'Edad esta vacio!';
    } else if (parseFloat(this.edad) <= 0) {
      this.error = 'Su edad no puede ser menor o igual a CERO!';
    } else {
      //trim (para quitar espacios a la derecha y a la izquierda)
      this.nombre = this.nombre.trim();
      this.apellidos = this.apellidos.trim();
      this.edad = this.edad;

      //let, const
      let persona: any = {
        nombre: this.nombre,
        apellidos: this.apellidos,
        edad: this.edad,
      };

      this.listaPersonas.push(persona);

      this.limpiar();
      this.cambiarPantalla();
    }
  }

  limpiar() {
    this.nombre = '';
    this.apellidos = '';
    this.edad = '';
    this.error = '';
  }

  cambiarPantalla() {
    if (this.pantalla == 'lista') {
      this.pantalla = 'agregar';
    } else {
      this.pantalla = 'lista';
    }
  }
}
