const express = require("express");
const app = express();

app.get("/",function(req, res){
    res.send("Olá mamãe")
})

app.get("/blog",function(req, res){
    res.send("Bem vindo ao meu blog")
})

app.get("/canal/youtube",function(req, res){
    res.send("<h1>Bem vindo ao meu canal!</h1>")
})

// Parametros
app.get("/ola/:nome/:empresa", function(req, res){
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>OI " + nome + " do " + empresa + " </h1>")
})

// Parametros opcionais (basta colocar o "?" depois do parametro)
app.get("/ola/:nome?/:empresa?", function (req, res) {
    // REQ => DADOS ENVIADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>OI " + nome + " do " + empresa + " </h1>")
})

// Query Params
app.get("canal/youtube", function(req, res){
    var canal = req.query["canal"]

    if(canal){
        res.send(canal);
    }else{
        res.send("nenhum canal fornecido!")
    }
})

app.listen(4000,function(error){
    if(error){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})