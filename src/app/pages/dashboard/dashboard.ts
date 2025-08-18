import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FileSevice } from '../../services/file';
import { Theme } from '../../services/theme';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})    
export class Dashboard  {

  constructor(public themeService: Theme, private fileService: FileSevice) {}

  toggleTheme(){
    this.themeService.toggleTheme();
  }

  get files(){
    return this.fileService.getFiles();
  }

  viewFile(url: string) {
  window.open(url, '_blank');
}

}