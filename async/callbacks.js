function enviarEmail(mensagem, email, callback) {
    setTimeout(() => {
        console.log(`
            ${mensagem} 
            ---------------------
            ${email}
        `)
        callback()
    },5000)

}

console.log('Inicio do envio')
enviarEmail(`ola caraio`, `porrasa@gmail.com`, () => {
    console.log(`Isso é uma callback`)
})