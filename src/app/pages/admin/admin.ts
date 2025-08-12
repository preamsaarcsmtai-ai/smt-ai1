import { Component } from '@angular/core';
import { FileSevice } from '../../services/file';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin {

 constructor(private fileService:FileSevice) {}

 onFileSelected(e:any){
  const file: File = e.target.files[0];
  if (file) {
    this.fileService.addFile(file);
  }
 }

 get uploadedFiles(){
  return this.fileService.getFiles();
 }

 viewFile(url: string) {
  window.open(url, '_blank');
}
 
}
