import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

    const options = {
      stringsElement: '#typed-strings',
      strings: ['#Training banking juros amigo', 'Peça a portabilidade e venha ser Training Bankinhg hoje mesmo'],
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

  gotoCadastroClientes() {
    this.router.navigate(['cadastro-clientes']);
  }
}
