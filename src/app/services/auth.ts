import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
 
  private users = [
    {userName:'admin', password:'admin12345', role:'admin'},
    {userName:'user@gmail.com', password:'user@123', role:'user'}
  ]
  

  constructor(private router:Router) {}

  login(userName:string, password:string){
    const users = this.users.find(u => u.userName === userName && u.password === password);
    if (users) {
      localStorage.setItem('currentUser', JSON.stringify(users));
      return true;
    }
    return false;
  }

  register(userName:string, password:string, role:string){
    const exists = this.users.some(u=> u.userName === userName);
    if (!exists) {
      this.users.push({userName,password, role});
      return true;
    }
    return false
  }

  getCurrentUser(){
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']); 
  }

  isLoggedIn(){
    return !!this.getCurrentUser();
  }
}
