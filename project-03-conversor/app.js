var HtmlParser = require("./HtmlParser");
var Processor = require("./Processor");
var Table = require("./Table");
var PDFWriter = require("./PDFWriter")
var Write = require("./Write");
var Reader = require("./Reader");

var leitor = new Reader();
var escritor = new Write();

async function main(){
    var dados = await leitor.Read("./messias.cvs");
    var dadosProcessados = Processor.Process(dados);

    var usuarios = new Table(dadosProcessados);

    var html = await HtmlParser.Parse(usuarios)

    escritor.Write(Date.now() + ".html", html);
    PDFWriter.WritePDF(Date.now() + ".PDF", html)

    console.log(html);
    console.log(usuarios.RowCount);
    console.log(usuarios.ColumnCount);
}

main();