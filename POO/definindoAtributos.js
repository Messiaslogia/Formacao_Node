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
var teste1 = vingadores.ano = 22;
var teste2 = vingadores.titulo = `Vingadores`;
var teste3 = vingadores.genero = `Ação`;
