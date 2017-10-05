import {AlertaService} from './alerta.service';
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Livro Angular Casa do C�digo';

  nome: String = "Elton";
  
  desenvolvimento: String[] = ['Angular 2', 'JavaScript', 'TypeScript', 'HTML', 'CSS'];
  
  valor: String;

  constructor(private alertaService: AlertaService) {}

  enviarMsg(): void {
    this.alertaService.msgAlerta();
  }

  valorPassado(valorPassado): void {
    this.valor = valorPassado;
  } 

}
