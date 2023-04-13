import { Component } from '@angular/core';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  constructor(private datosService: DatosService){}

  get datosdata(){
    return this.datosService.datadatos
  }
}
