const fs = require("fs");

function modificarUsuario(nome, curso, categoria){
    fs.readFile("./messias.json", { encoding: "utf-8" }, (err, dados) => {
        if (err) {
            console.log("Problemas ao ler o arquivo")
        } else {
            var conteudo = JSON.parse(dados);

            fs.writeFile("./messias.json", JSON.stringify(conteudo), (erro) => {
                if (erro) {
                    console.log("Problemas ao escrever no arquivo")
                } else {

                }
            })

            console.log(conteudo)
        }
    })
}

modificarUsuario("João", "PHP", "Burrada")

