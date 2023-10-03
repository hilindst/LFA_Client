import { Component } from '@angular/core';

@Component({
  selector: 'app-login-float',
  templateUrl: './login-float.component.html',
  styleUrls: ['./login-float.component.css']
})
export class LoginFloatComponent {
  body = document.body;
  input = document.querySelector('input[type=text]');
  overlay = document.querySelector('.overlay');

  showFloater() {
      this.body.classList.add('show-floater');
    }

  closeFloater() {
      if (this.body.classList.contains('show-floater')) {
       this.body.classList.remove('show-floater');
      }
    }


}
