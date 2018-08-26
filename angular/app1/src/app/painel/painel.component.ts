import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES
  public instrucao: String = 'Traduza a frase:'
  public resposta: String

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number

  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void{
    if(this.rodadaFrase.frasePtBr != this.resposta){
      alert('Tadução incorreta!');
      return
    }

    this.progresso += 100 / this.frases.length
    this.rodadaFrase = this.frases[++this.rodada]
  }
}
