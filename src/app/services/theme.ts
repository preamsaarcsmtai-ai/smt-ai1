import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
 
  private isDarkMode = false;

  
  constructor() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = false;
    }
    this.applyTheme();
  }


  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme',this.isDarkMode ? 'dark':'light');
    this.applyTheme();
  }

  private applyTheme(){
    if(this.isDarkMode){
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    }
    else{
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  isDark(){
    return this.isDarkMode;
  }
  
}
