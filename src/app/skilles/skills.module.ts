import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';
import { InformacionComponent } from './informacion/informacion.component';
import { SkillsComponent } from './skills.component';



@NgModule({
  declarations: [
     InformacionComponent,
     SkillsComponent
  ],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule,
  ],
  exports: [
     InformacionComponent,
     SkillsComponent
  ]
})
export class SkillsModule { }
