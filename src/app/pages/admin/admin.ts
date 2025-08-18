import { Component } from '@angular/core';
import { Theme } from '../../services/theme';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone:true,
  imports:[FormsModule,CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {
  uploadedFiles: { name: string; url: string }[] = [];

  constructor(public theme: Theme) {}

  toggleTheme() {
    this.theme.toggleTheme();
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedFiles.push({ name: file.name, url: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  viewFile(url: string) {
    window.open(url, '_blank');
  }
}
