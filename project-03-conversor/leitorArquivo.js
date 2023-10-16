const fs = require("fs");

// Lê o arquivo 
fs.readFile("./messias.txt",{encoding: "utf-8"},(erro, dados) => {
    if(erro){
        console.log("Deu uim na leitura do arquivo!")
    }else{
        console.log(dados)
    }
})

// Escreve no arquivos 
fs.writeFile("./messias.txt", "Meu nome é messias!!!", (err) =>{
    if(err){
        console.log("Erro durante o salvamento...")
    }
})