import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  userName = '';
  password = '';
  role = 'user';
  error = '';

  constructor(private auth:Auth, private route:Router) {}

  onRegister(){
    if (this.auth.register(this.userName, this.password, this.role)) {
      this.route.navigate(['/login']);
    } else {  
      this.error = 'User already exists';
    }
  }
}
