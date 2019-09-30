import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import TypeIt from 'typeit';

@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    const options = {
      stringsElement: '#typed-strings',
      strings: ['#Bem-vindo a área logada'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 200,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
    };

    const typed = new TypeIt('.typing-element', options).go();
  }

  logout(){
    localStorage.removeItem('cadastro');
  }
}