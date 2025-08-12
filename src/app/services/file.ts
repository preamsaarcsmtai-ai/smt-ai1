import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileSevice {

   private files: { name:string, url:string}[] = [];

   constructor() {
    const savedFiles = localStorage.getItem('uploadedFiles');
    if (savedFiles) {
      this.files = JSON.parse(savedFiles);
    }
  }

  getFiles(){
  return  this.files
  }

  addFile(file: File){
     const reader = new FileReader();
    reader.onload = (e: any) => {
      const newFile = { name: file.name, url: e.target.result };
      this.files.push(newFile);
      this.saveToLocalStorage();
    };
    reader.readAsDataURL(file); 
  }

  private saveToLocalStorage(){
    localStorage.setItem('uploadedFiles', JSON.stringify(this.files));
  }

}
