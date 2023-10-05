const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database")
const Perguntas = require("./database/Pergunta")
const Resposta = require("./database/Resposta")

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
    Perguntas.findAll({raw: true, order:[
        ['id', 'DESC'] //ASC = Crescente || DESC = Decrescente
    ]}).then(perguntas => {
        res.render("index", {
            perguntas: perguntas
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

app.get("/pergunta/:id", (req, res) =>{
    const id = req.params.id;
    Perguntas.findOne({
        where: {id:id} 
    }).then((pergunta) => {
        if(pergunta != undefined){

            Resposta.findAll({
                where: {perguntaId: pergunta.id},
                order: [['id', 'DESC']]
            }).then(respostas => {
                res.render("pergunta",{
                    pergunta: pergunta,
                    respostas: respostas
                });
            })

        }else{
            res.redirect("/");
        }
    });
});

app.post("/responder", (req,res) => {
    const corpo = req.body.corpo;
    const perguntaId = req.body.perguntaId;
    Resposta.create({
        corpo: corpo,
        perguntaId: perguntaId
    }).then(() => {
        res.redirect("/pergunta/"+perguntaId)
    });
});

app.listen(8080,()=>{
    console.log("app rodando!")
})