import { Contatos } from './contatos';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  contato = new Contatos("Elton", "(71)99999-9999", "email@email.com");

  constructor() { }

  ngOnInit() {
  }
  
  enviarDados(): void {
    alert("Nome: " + this.contato.nome);
    alert("Telefone: " + this.contato.telefone);
    alert("Email: " + this.contato.email);
  }

}
