function enviarEmail(mensagem, email, callback) {
    setTimeout(() => {
       var errovalor = true;
       if(errovalor){
           callback(12, `Essa bosta ta com erro aarruma progrmaador arrumaa`)
       }else{
            callback(12)
       }
        
    }, 5000)

}

console.log('Inicio do envio')
enviarEmail(`ola caraio`, `porrasa@gmail.com`, (time, mensagem) => {
    if(mensagem == undefined){
        console.log(`Tudo ok`)
        console.log(`Tempo: ${time}s`)
    }else{
        console.log(mensagem)
    }
})