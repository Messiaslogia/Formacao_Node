function enviarEmail() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            var deuErrro = false;
            if (!deuErrro) {
                resolve({time: 122, to: `Messiass`}); //Promessa Ok
            } else {
                rejects(`Não vou cumprir porr nehuma`) // Promessa negada
            }
        }, 2000)
    });
}

enviarEmail(`oláa`, `messias@seila.com`).then(({time, to}) => {
    console.log(`
    ${time}s
    --------------
    ${to}
    
    `)
}).catch((dados) => {
    console.log(`Promessa não cumprida fdp ${dados}`)

})