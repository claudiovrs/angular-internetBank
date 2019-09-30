import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin;
  theEvent;
  key;
  regex;
  keys;
  getCadastro;
  message;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      cpf: ['']
    });
  }
  onlynumber(evt) {
    this.theEvent = evt || window.event;
    this.key = this.theEvent.keyCode || this.theEvent.which;
    this.key = String.fromCharCode(this.key);
    this.regex = /^[0-9.]+$/;
    if (!this.regex.test(this.key)) {
      this.theEvent.returnValue = false;
      if (this.theEvent.preventDefault) {
        this.theEvent.preventDefault();
      }
    }
  }
  
  login() {
    
    this.getCadastro = JSON.parse(localStorage.getItem('cadastro'));
    const cpfPersistido = JSON.stringify(this.getCadastro.cpf);
    const cpfDigitado = this.formLogin.get('cpf').value;
    if (cpfPersistido === cpfDigitado) {
      this.router.navigate(['home-logada']);
    } else {
      this.router.navigate(['acesso-negado']);
    }
  }
}