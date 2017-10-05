import { MeuLogService } from './meu-log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NomesTecService {

  constructor(private meuLog: MeuLogService) { }
  
  getNomesTec(): String[] {
    this.meuLog.setLog("consultou o array de tecnologia");
    return ["Angular 2", "TypeScript", "HTML5", "CSS3", "Desenvolvendo com Angular 2"];
  }

}
