import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //declarando a varial de controle de formulario
  formLogin;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ['']
    });

    if (localStorage.getItem('cadastro')) {
      document.getElementById("div-login").style.display = "none!important";
    }
  }
}
