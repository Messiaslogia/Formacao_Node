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
var hulk = new Filme();
var starWars = new  Filme();