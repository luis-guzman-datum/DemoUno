import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss'],
})
export class SaludoComponent implements OnInit {
  titulo: string = 'Saludo';

  persona: any = { nombre: 'Luis', icono: 'person' };

  personas: any[] = [
    { nombre: 'Luis', icono: 'person' },
    { nombre: 'Claudia', icono: 'woman' },
  ];

  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };


  constructor(private _notify:NotificationsService) {}

  ngOnInit(): void {}

  outputEmitido(valor: any) {
    alert(valor);
  }

  metodoParaRecibirValorDelHijo(parametro: any) {
   // alert(parametro);
   this._notify.success('Persona', parametro);
  }


}
