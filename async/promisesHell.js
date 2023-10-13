function pegarId(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(5)
        },1500)
    })
}

function buscarEmailNobanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`mmute@gmail.com`)
        }, 1500)
    })
}

function enviarEmail(corpo, mensagem) {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            var deuErrro = false;
            if (!deuErrro) {
                resolve({time: 6}); //Promessa Ok
            } else {
                rejects() // Promessa negada
            }
        }, 2000)
    });
}

pegarId().then((id) =>{
    buscarEmailNobanco(id).then((email)=>{
        enviarEmail(`Ola`, email).then(() =>{
            console.log(`Email enviado` + id)
        }).catch(err => {
            console.log(err)
        })
    })
})