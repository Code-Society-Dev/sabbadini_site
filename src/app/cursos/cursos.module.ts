import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { SharedModule } from '../shared/shared.module';
import { DatosComponent } from './datos/datos.component';


@NgModule({
  declarations: [
    CursosComponent,
    DatosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule
  ],
  exports: [
    CursosComponent,
    DatosComponent
  ]
})
export class CursosModule { }
