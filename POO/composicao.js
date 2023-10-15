class Leitor{
    Ler(caaminho){
        return `consteudo Ler`
    }
}

class Escritor {
    Escrever(caaminho) {
        return `conteudo escrever`
    }
}

class ManipuladorArquivo{
    constructor(nome){
        this.leitor = new Leitor();
        this.escritor = new Escritor();
    }

    SalvarListaDeUsuarios(lista){
        this.escritor.Escrever(`Olá`, lista)
    }
}

var manipulador = new ManipuladorArquivo(`meuArquivo.txt`)

manipulador.escritor.Escrever();
manipulador.Leitor.Ler();

