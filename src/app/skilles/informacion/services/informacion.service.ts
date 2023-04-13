import { Injectable } from '@angular/core';
import { html } from 'src/app/shared/data/skills/html.data';
import { javascript } from 'src/app/shared/data/skills/javascript.data';
import { css } from 'src/app/shared/data/skills/css.data';
import { backend } from 'src/app/shared/data/skills/backend';
import { otros } from 'src/app/shared/data/skills/otros.data';

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  private _html = html
  get datahtml(){
    return this._html
  }

  private _javascript = javascript
  get datajavascript(){
    return this._javascript
  }


  private _css = css
  get datacss(){
    return this._css
  }


   private _backend = backend
  get databackend(){
    return this._backend
  }

  private _otros = otros
  get dataotros(){
    return this._otros
  }


}
