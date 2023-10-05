const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const Perguntas = require("./database/Pergunta")

// Database

connection.authenticate()
    .then(() => {
        console.log("Conexão feita com o banco de dados!")
    })
    .catch((msgErro) => {
        console.log(msgErro)
    })

app.set('view engine', 'ejs');
app.use(express.static('public'));

// BodyParser
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json());

// Rotas
app.get("/", (req, res) =>{
    Perguntas.findAll({rae: true}).then(perguntas => {
        res.render("index", {
            perguntas: pergunta
        });
    });
});

app.get("/perguntar", (req, res) => {
    res.render("perguntar");
})

app.post("/salvarpergunta", (req, res) => {
    var titulo = req.body.titulo
    var descricao = req.body.descricao
     Perguntas.create({
        titulo: titulo,
        descricao: descricao
     }).then(() => {
        res.redirect("/")
     });
});

app.listen(8080,()=>{
    console.log("app rodando!")
})