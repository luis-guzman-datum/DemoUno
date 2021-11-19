import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Impuesto } from 'src/app/models/Impuesto';

declare var $: any;

@Component({
  selector: 'app-impuestos',
  templateUrl: './impuestos.component.html',
  styleUrls: ['./impuestos.component.scss'],
})
export class ImpuestosComponent implements OnInit, AfterViewInit {
  impuestosForm: FormGroup = new FormGroup({
    nombreImpuesto: new FormControl('', [Validators.required]),
    porcentaje: new FormControl('', [Validators.required]),
  });

  listaImpuestos: Impuesto[] = [];

  filtro: string = '';

  options: any = {
    position: ['bottom', 'right'],
    showProgressBar: true,
    timeOut: 5000,
  };

  cargando: boolean = false;

  titulo: string = 'Impuestos';

  constructor(private _service: NotificationsService) {}

  ngOnInit(): void {
    /*   setTimeout(() => {
      this.cargando = false;
    }, 5000); */
  }

  ngAfterViewInit() {
    $('.datepicker').datepicker({
      format: 'dd/mm/yyyy',
      i18n: {
        cancel: 'Cancelar',
        done: 'Listo',
        months: [
          'Enero',
          'Febrero',
          'Marzo',
          'Abril',
          'Mayo',
          'Junio',
          'Julio',
          'Agosto',
          'Septiembre',
          'Octubre',
          'Noviembre',
          'Diciembre',
        ],
        monthsShort: [
          'Ene',
          'Feb',
          'Mar',
          'Abr',
          'May',
          'Jun',
          'Jul',
          'Ago',
          'Sep',
          'Oct',
          'Nov',
          'Dic',
        ],
        weekdays: [
          'Domingo',
          'Lunes',
          'Martes',
          'Miércoles',
          'Jueves',
          'Viernes',
          'Sábado',
        ],
        weekdaysAbbrev: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      },
    });
  }

  agregar() {
    if (this.impuestosForm.valid) {
      let registros = JSON.stringify(this.listaImpuestos).indexOf(
        JSON.stringify(this.impuestosForm.value)
      );

      if (registros == -1) {
        this.listaImpuestos.push(this.impuestosForm.value);
        this.impuestosForm.reset();
        this._service.success('Exito', 'Registro agregado');
      } else {
        //alert('Registro ya existe');
        this._service.warn('Advertencia', 'Registro ya existe');
      }
    } else {
      //alert('Formulario invalido, favor revisar');
      this._service.error('Error', 'Formulario invalido, favor revisar');
    }
  }

  reset() {
    this.impuestosForm.reset();
  }

  eliminar(impuesto: Impuesto) {
    let p = this.listaImpuestos.indexOf(impuesto);
    if (p !== -1) {
      this.listaImpuestos.splice(p, 1);
    }
  }
}
