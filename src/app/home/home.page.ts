import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string = '';
  password: string = '';
  message: string = '';
  constructor() {

  }
  validateLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      this.message = 'Acceso correcto';
    } else {
      this.message = 'Acceso incorrecto';
    }
  }

}
