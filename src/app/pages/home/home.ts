import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  constructor(private router: Router, public theme: Theme) {}

  toggleTheme() {
    this.theme.toggleTheme();
  }

  get themeIcon() {
    return this.theme.isDark() ? '☀️' : '🌙';
  }

  login() {
    this.router.navigate(['/login']);
  }

  loginAsGuest() {
    this.router.navigate(['/login']);
    // console.log('Login as Guest clicked');
  }
}
