import { Injectable } from '@angular/core';
import { skills } from 'src/app/shared/data/skills.data';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  private _data = skills
  constructor() { }

  get data(){
    return this._data
  }
}
