import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
 constructor(private informacionService: InformacionService){}

  get htmldata(){
    return this.informacionService.datahtml
  }

  get javascriptdata(){
    return this.informacionService.datajavascript
  }

  get cssdata(){
    return this.informacionService.datacss
  }

  get backenddata(){
    return this.informacionService.databackend
  }

  get otrosdata(){
    return this.informacionService.dataotros
  }
}
