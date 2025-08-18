import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var particlesJS: any;

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {


  constructor(private router: Router) {}
  ngOnInit(): void {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80 },
        size: { value: 3 },
        move: { speed: 2 },
        line_linked: {
          enable: true,
          color: '#00f0ff'
        },
        color: { value: '#00f0ff' }
      }
    });
  }

  login() {
 this.router.navigate(['/login']);  }

  loginAsGuest() {
    this.router.navigate(['/login']);
    // console.log('Login as Guest clicked');
  }
}