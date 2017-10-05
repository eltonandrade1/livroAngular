import { Injectable } from '@angular/core';

@Injectable()
export class PessoaService {
  
  nomePessoas: String[] = ['Elton', 'Tai', 'Vitória', 'Service']; 

  constructor() { }
  
  getPessoas(): String[] {
    return this.nomePessoas;
  }
  
  addPessoas(nome: String): void {
    this.nomePessoas.push(nome);
  }

}
