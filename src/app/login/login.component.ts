import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  token: string;

  constructor() {
    this.token = '';
  }
  setToken() {
    // Store the token globally
    localStorage.setItem('token', this.token);
  }
}