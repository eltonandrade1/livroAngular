import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  nomes: any[] = [{id: 1, nome: 'Elton'},
  {id: 2, nome: 'Tai'},
  {id: 3, nome: 'Vit�ria'}];

  constructor() {}

  ngOnInit() {
  }

  meuSave(index: number, nomes: any) {
    return nomes.id;
  }

  atualizar(): void {
    this.nomes = [{id: 1, nome: 'Elton'},
    {id: 2, nome: 'Tai'},
    {id: 3, nome: 'Vit�ria'},
    {id: 4, nome: 'Ruan'}];
  }

}
