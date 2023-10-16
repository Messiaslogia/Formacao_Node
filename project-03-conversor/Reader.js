const fs = require("fs");
const util = require("util");

//Sem transformar a função em um promise
// class Reader{

//     Read(filepath){
//         fs.readFile(filepath, "utf-8", (err, data) => {
//             if(err){
//                 console.log(err);
//             }else{
//                 console.log(data);
//             }
//         })
//     }
// }


// Transformando em uma promise
class Reader {

    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath) {
        try {
            return await this.reader(filepath, "utf-8")
        } catch (error) {
            return undefined
        }
    }
}

module.exports = Render;