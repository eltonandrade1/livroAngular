import { AlertaService } from '../alerta.service';
import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pessoas',
  templateUrl: './lista-pessoas.component.html',
  styleUrls: ['./lista-pessoas.component.css'],
  providers: [PessoaService]
})
export class ListaPessoasComponent implements OnInit {
  
  pessoas: String[];
  nome: String;

  constructor(private pessoaService: PessoaService) {
    
    this.pessoas = this.pessoaService.getPessoas();
    
   }
  
  addPessoa(): void {
    this.pessoaService.addPessoas(this.nome);
  }
  
  listar() {
    
  }
  
  
  
  ngOnInit() {
  }

}
