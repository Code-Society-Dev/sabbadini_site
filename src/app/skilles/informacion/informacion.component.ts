import { Component } from '@angular/core';
import { InformacionService } from './services/informacion.service';


@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
 constructor(private informacionService: InformacionService){}

  get data(){
    return this.informacionService.data
  }
}
