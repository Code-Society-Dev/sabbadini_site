import { Component } from '@angular/core';
import { DatosService } from './services/datos.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {

  constructor(private proyectosService: DatosService){}

  get proyectosdata(){
    return this.proyectosService.dataproyectos
  }
}
