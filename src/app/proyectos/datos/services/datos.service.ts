import { Injectable } from '@angular/core';
import { proyectos } from 'src/app/shared/data/proyectos/proyectos.data';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor() {}

  private _proyectos = proyectos;
  get dataproyectos() {
    return this._proyectos;
  }
}
