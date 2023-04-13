import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectosRoutingModule } from './proyectos-routing.module';
import { DatosComponent } from './datos/datos.component';
import { ProyectosComponent } from './proyectos.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    DatosComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProyectosRoutingModule
  ],
  exports: [
    DatosComponent,
    ProyectosComponent
  ]
})
export class ProyectosModule { }
