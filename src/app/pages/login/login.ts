import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule,RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  userName ='';
  password = '';
  error = '';
    submitted = false;
    isDarkMode = true;

  constructor(private auth:Auth, private route:Router) {}

 onLogin() {
    this.submitted = true;
    this.error = '';

    // Basic validation
    if (!this.userName || !this.password) {
      return; // stops execution until fields are filled
    }

    // Authentication check
    if (this.auth.login(this.userName, this.password)) {
      this.route.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid username or password';
    }
  }     
toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  const container = document.querySelector('.container');
  if (container) {
    container.classList.toggle('dark-mode', this.isDarkMode);
  }
}
}
