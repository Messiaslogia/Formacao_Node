class Filme{

    constructor(titulo, ano, genero){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
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

var vingadores = new Filme(`Vingadores`, 22, `Ação` );
