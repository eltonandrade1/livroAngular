import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  
  tamanho: number = 20;
  valorFonte: String = this.tamanho + 'px';
  
  validaFonte: boolean = false;
  validaCor: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  incrementar(): void {
    this.tamanho ++;
    this.valorFonte = this.tamanho + 'px';
  }
  
  mudarFonte(): void {
    this.validaFonte = ! this.validaFonte;
  }
  
  mudarCor(): void {
    this.validaCor = ! this.validaCor;
  }
  
  styles(): any {
     let valores = {
      'fonte-size': this.validaFonte ? 'x-large' : 'smaller',
      'color': this.validaCor ? 'red' : 'blue',
    };
    return valores;
  }

}
