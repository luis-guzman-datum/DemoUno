import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss'],
})
export class PresentacionComponent implements OnInit {
  @Input() persona: any;

  @Output() output: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  enviar(nombre: string) {
    //alert(nombre);
    this.output.emit(nombre);
  }
}
