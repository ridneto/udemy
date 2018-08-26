import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { StatusJogo } from '../shared/statusJogo.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES
  public instrucao: String = 'Traduza a frase:'
  public resposta: String = ''  
  public rodadaFrase: Frase
  public rodada: number = 0
  public progresso: number = 0
  public tentativas: number = 3

  @Output() public encerrarJogo = new EventEmitter()

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
  }

  public verificaResposta(): void{
    if(this.rodadaFrase.frasePtBr != this.resposta){
      if(--this.tentativas === -1){
        this.encerrarJogo.emit(new StatusJogo(false))
      }       
    }else{
      this.progresso += (100 / this.frases.length)
      
      if(++this.rodada === this.frases.length){
        this.encerrarJogo.emit(new StatusJogo(true))
      }
      
      this.atualizaRodada()    
    }
  }

  public atualizaRodada(): void{
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ""
  }
}
