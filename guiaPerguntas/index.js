const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) =>{
    var nome = req.params.nome;
    var lang = req.params.lang
    var exibirMsg = false

    var produtos = [
        {nome: "doritos", preco: "200"},
        {nome: "leite", preco: "222"},
        {nome: "bolacha", preco: "50"},
        {nome: "porrada", preco: "2000"}
    ]
    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do programador",
        inscritos: 8040,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.listen(8080,()=>{
    console.log("app rodando!")
})