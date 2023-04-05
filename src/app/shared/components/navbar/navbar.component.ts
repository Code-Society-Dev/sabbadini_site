import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @Output() toggled = new EventEmitter<boolean>();

  isToggled = false;

  toggle() {
    this.isToggled = !this.isToggled;
    this.toggled.emit(this.isToggled);
  }
 
  
  

}
