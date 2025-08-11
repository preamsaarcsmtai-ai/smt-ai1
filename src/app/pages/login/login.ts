import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  userName ='';
  password = '';
  error = '';

  constructor(private auth:Auth, private route:Router) {}

    onLogin(){
      if (this.auth.login(this.userName, this.password)) {
        this.route.navigate(['/dashboard'])
      } else{
        this.error = 'Inavlid userName or Password'
      }
    }

}
