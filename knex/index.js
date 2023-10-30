var database = require('./database');

var dados = [
    {
        nome: "call of duty ",
        preco: 60
    },

    {
        nome: "call of duty 2",
        preco: 60
    },

    {
        nome: "GTA",
        preco: 60
    },
]

//  INSERT
database.insert(dados).into("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err)
})

// SELECT
database.select().table("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

// NESTED QUERIES
database.insert({nome: "nome do jogo", preco: 25}).into("games").then(data =>{
    database.select(["id", "preco"]).table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err =>{
    console.log(err);
});

// WHERE
var query = database.select(["id", "preco"])
    .where({nome: "Mists of noyah"})
    .where({id: 2})
    .table("games")

// OR in WHERE
var query = database.select(["id", "preco"])
    .where({ nome: "Mists of noyah" })
    .orWhere({ id: 2 })
    .table("games")

// LIKE, !, > tem que ser descrito em linha
var query = database.select(["id", "preco"])
    .whereRaw("nome = 'Mists of Noyah' OR preco > 120")
    .table("games").then(data => {
        console.log(data)
    }).catch(err =>{
        console.log(err)
    })

// RAW
database.raw("SELECT * FROM games").then(data =>{
        console.log(data)
    }).catch(err =>{
        console.log(err)
})

// DELETE
database.where({id: 3}).delete().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// UPDATE
database.where({id:5}).update({preco: 40}). table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// ORDER BY
database.select().table("games").orderBy("nome","desc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})