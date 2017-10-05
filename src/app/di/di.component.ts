import { NomesTecService } from './nomes-tec.service';
import { MeuLogService } from './meu-log.service';
import { ProviderAst } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css'],
  providers: [NomesTecService, MeuLogService]
})
export class DiComponent implements OnInit {
  
  tecnologias: String[];

  constructor(private service: NomesTecService) {
  this.tecnologias = service.getNomesTec();
   }

  ngOnInit() {
  }

}
