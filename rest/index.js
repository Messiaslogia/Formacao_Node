const express = require("express");
const bodyParser = require("body-parser");
app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const DB = {
    games: [
        {
            id: 23,
            title: "Call of Duty",
            year: 2018,
            price: 60
        },

        {
            id: 23,
            title: "Call",
            year: 2022,
            price: 80
        },

        {
            id: 2,
            title: "Minecraft",
            year: 2010,
            price: 600
        }
    ]
}

// Peghando todos os valores
app.get("/games", (req, res) =>{
    res.statusCode = 200;
    res.json(DB.games);
})

// Pegando apenas um valor 
app.get("/game/:id", (req, res) =>{
    if(isNaN(req.params.id)){
        res.sendStatus(400);
    }else{
        var id = parseInt(req.params.id);

        var game = DB.games.find(g => g.id == id);

        if(game != undefined){
            res.statusCode = 200;
            res.json(game);
        }else{
            res.sendStatus(404);
        }
    }
})

//Envando jogo
app.post("/game", (req, res) => {
    var { title, price, year } = req.body;
    DB.games.push({
        id: 2323,
        title,
        price,
        year
    });
    res.sendStatus(200);
})

//Deletando Jogo
app.delete("/game/:id", (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    }else{
        var id = parseInt(req.params.id);
        var index = DB.games.findIndex(g => g.id == id)

        if(index == -1){
            res.sendStatus(404);
        }else{
            DB.games.slice(index, 1);
            res.sendStatus(200);
        }
    }
})

//Editando um jogo
app.put("/game/:id", (req, res) => {
    if (isNaN(req.params.id)) {
        res.sendStatus(400);
    } else {
        var id = parseInt(req.params.id);
        var game = DB.games.find(g => g.id == id);
        if (game != undefined) {
            var { title, price, year } = req.body;
            if (title != undefined) {
                game.title = title;
            }
            if (price != undefined) {
                game.price = price;
            }
            if (year != undefined) {
                game.year = year;
            }
            res.sendStatus(200);

        } else {
            res.sendStatus(404);
        }
    }
});

app.listen(8080, () =>{
    console.log("API LIGADA")
})