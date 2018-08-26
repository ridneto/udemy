export class Coracao {
    constructor(
        public cheio: Boolean, 
        public urlCoracaoCheio: String = 'assets/coracao_cheio.png',
        public urlCoracaoVazio: String = 'assets/coracao_vazio.png'
    ){}

    public exibeCoracao(): String {
        return this.cheio ? this.urlCoracaoCheio : this.urlCoracaoVazio
    }
}