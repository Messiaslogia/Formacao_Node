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

// //  INSERT
database.insert(dados).into("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err)
})

// // SELECT
database.select().table("games").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

// // NESTED QUERIES
database.insert({nome: "nome do jogo", preco: 25}).into("games").then(data =>{
    database.select(["id", "preco"]).table("games").then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err =>{
    console.log(err);
});

// // WHERE
var query = database.select(["id", "preco"])
    .where({nome: "Mists of noyah"})
    .where({id: 2})
    .table("games")

// // OR in WHERE
var query = database.select(["id", "preco"])
    .where({ nome: "Mists of noyah" })
    .orWhere({ id: 2 })
    .table("games")

// // LIKE, !, > tem que ser descrito em linha
var query = database.select(["id", "preco"])
    .whereRaw("nome = 'Mists of Noyah' OR preco > 120")
    .table("games").then(data => {
        console.log(data)
    }).catch(err =>{
        console.log(err)
    })

// // RAW
database.raw("SELECT * FROM games").then(data =>{
        console.log(data)
    }).catch(err =>{
        console.log(err)
})

// // DELETE
database.where({id: 3}).delete().table("games").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// // UPDATE
database.where({id:5}).update({preco: 40}). table("games").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

// // ORDER BY
database.select().table("games").orderBy("nome","desc").then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

////////////////////////////////////////////////////////////////////////////

// ASSOCIAÇÕES INSERIDAS
database.insert({
    nome: "Cuspida",
    game_id: 5
}).table("estudios").then(data =>{
    console.log(data);
}).catch(err => {
    console.log(err);
});

// // RELACIONAMENTO 1 PARA 1 
database.select().table("games").innerJoin("estudios", "estudios.game_id", "games.id").then( data =>{
    console.log(data)
}).catch(err => {
    console.log(err)
})

// // RELACIONAMENTO 1 PARA 1 
database.select("games.id", "estudios.id as estudio_id", "games.nome as game_nome", "estudios.nome as estudio_nome").table("games").innerJoin("estudios", "estudios.game_id", "games.id").then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// // RELACIONAMENTO 1 PARA 1 com where
database.select("games.id", "estudios.id as estudio_id", "games.nome as game_nome", "estudios.nome as estudio_nome").table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id",1).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})

// RELACIONAMENTO 1 PARA M
database.select("games.*", "estudios.nome as estudio_nome").table("games").innerJoin("estudios", "estudios.game_id", "games.id").where("games.id",5).then(data => {
    
    var estudiosGames = data;
    var games = {
        id: 0,
        nome: " ",
        estudios: []
    }

    games.id = data[0].id;
    games.nome = data[0].nome;

    data.forEach(estudio => {
        games.estudios.push({nome: estudio.estudio_nome});
    });
    console.log(games)
}).catch(err => {
    console.log(err)
})

// RELACIONAMENTO M PARA M
database.select(["estudios.nome as estudio_nome", "games.nome as game_nome", "games.preco"])
    .table("games_estudios")
    .innerJoin("games", "games.id", "games_estudios.estudio_id")
    .innerJoin("estudios", "games.id", "games_estudios.estudio_id")
    .where("estudios.id",2).then(data =>{
        console.log(data);
    }).catch(err =>{
        console.log(err)
})


async function testeTransacao(){
    try{
        await database.transaction(async trans => {
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Qualquer nome"}).table("estudios");
            await database.insert({nome: "Qualquer nome"}).table("estudios");
        })
    }catch(err){
        console.log(err);
    }
}

