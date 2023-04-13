import { Injectable } from '@angular/core';
import { datos } from 'src/app/shared/data/cursos/cursos.data';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private _datos = datos

  get datadatos(){
    return this._datos
  }
  constructor() { }
}
