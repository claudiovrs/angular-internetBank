import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  //declarando a varial de controle de formulario
  formCadastro;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    //controel de formulario
    this.formCadastro = this.fb.group({
      nome: [''],
      cpf: [''],
      email: [''],
      telefone: [''],
      endereco: ['']
    });
    console.log(this.formCadastro.controls);
    this.formCadastro.valueChanges.pipe(
      debounceTime(1000)).subscribe(res => {console.log(res);
      this.formCadastro.valoresForm = res;
    });
  }

  cadastro(){
    this.formCadastro.conversao = JSON.stringify(this.formCadastro.valoresForm);
    localStorage.setItem('cadastro', this.formCadastro.conversao);
    
    //validar se o cadastro foi realizado com sucesso
    if(localStorage.getItem('cadastro')){
      this.router.navigate(['/cadastro-concluido']);
    }
  }
}
