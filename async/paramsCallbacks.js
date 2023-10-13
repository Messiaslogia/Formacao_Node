function enviarEmail(mensagem, email, callback) {
    setTimeout(() => {
        console.log(`
            ${mensagem} 
            ---------------------
            ${email}
        `)
        callback(mensagem, email)
    }, 5000)

}

console.log('Inicio do envio')
enviarEmail(`ola caraio`, `porrasa@gmail.com`, (mensagem, email) => {
    console.log(`essas bagaças ${mensagem} ${email} foraam paassadas via callback e meu teclado esta com ghosst`)
})