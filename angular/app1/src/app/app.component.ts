import { Component } from '@angular/core';
import { StatusJogo } from './shared/statusJogo.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true
  public vitoria: boolean

  public encerrarJogo(status: StatusJogo): void{
    this.jogoEmAndamento = false
    this.vitoria = status.vitoria
  }

  public reiniciarJogo(): void{
    this.jogoEmAndamento = true
    this.vitoria = undefined
  }
}
