import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {

  private isDarkMode = false;

  constructor() {
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode = savedTheme === 'dark';
    this.applyTheme();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme() {
    const root = document.documentElement; // <html>
    if (this.isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }

  isDark() {
    return this.isDarkMode;
  }
}
