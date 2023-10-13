// setTimeout(() =>{
//     console.log('Morraa')
// }, 5000)

function enviarEmail(mensagem, email){
    setTimeout(() =>{
        console.log(`
            ${mensagem} 
            ---------------------
            ${email}
        `)
    }, 5000)

}

console.log('Inicio do envio')
enviarEmail(`ola caraio`, `porrasa@gmail.com`)