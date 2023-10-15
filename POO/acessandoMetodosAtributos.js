class Filme{

    constructor(){
        this.titulo = '';
        this.ano = 0;
        this.genero = '';
    }

    Reproduzir(){
        console.log(`Reproduzindo....`)
    }

    Pausar() {
        console.log(`Pausa....`)
    }

    Avancar() {
        console.log(`Avanca....`)
    }

    Fechar() {
        console.log(`Fecha....`)
    }
}

var vingadores = new Filme();
vingadores.Avancar();
var teste11 = vingadores.ano

var hulk = new Filme();
hulk.Fechar();
var teste2 = hulk.titulo

var starWars = new  Filme();
starWars.Reproduzir();
var teste3 = starWars.genero