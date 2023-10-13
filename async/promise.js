function enviarEmail(){
    return new Promise((resolve, rejects) => {
        setTimeout(()=>{
            var deuErrro = true;
            if(!deuErrro){
                resolve(); //Promessa Ok
            }else{
                rejects() // Promessa negada
            }
        }, 2000)
    });
}

enviarEmail(`oláa`, `messias@seila.com`).then(() =>{
    console.log(`Promessa cumprida fdp`)
}).catch(() =>{
    console.log(`Promessa não cumprida fdp`)

})