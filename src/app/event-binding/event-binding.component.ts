import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  habilitarBotao: boolean = false;
  valores: String [] = [];
  idade: number = 0;

  constructor() { }

  ngOnInit() {
  }
  
  meuClick(): void {
    console.log("Evento de clique do botão");
  }
  
  digitou($event): void {
    console.log($event);
  }
  
  digitouVarTemplate(valor): void {
    console.log(valor);
  }
  
  validaSenha(valor: String): void {
    if (valor.length >= 5) {
      this.habilitarBotao = true;
    } else {
      this.habilitarBotao = false;
    }
  }
  
  gravarSenha(valor): void {
    alert("A Senha: " + valor + " foi gravada com sucesso");
  }
  
  adicionar(conteudo: String): void {
    this.valores.push(conteudo);
  }
  
  verIdade(valor): void {
    let ano = new Date();
    this.idade = ano.getFullYear() - valor;
  }

}
