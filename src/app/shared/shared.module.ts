import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { SobreMiModule } from './components/sobre-mi/sobre-mi.module';
import { FooterModule } from './components/footer/footer.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavbarModule,
    SobreMiModule,
    FooterModule
  ],
  exports: [
    NavbarModule,
    SobreMiModule,
    FooterModule
  ]
})
export class SharedModule { }
