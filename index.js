const express = require("express"); // Importanto o express
const app = express(); // Iniciando o express

//rotas, caminhos para páginas
app.get("/",function(req, res){
    res.send("<h1> Bem vindo! </h1>");
});

app.get("/blog/:artigo?",function(req, res){ //parametro opcional coloca ? no fim
    var artigo = req.params.artigo;
    if(artigo)
    {
        res.send("<h2> Artigo: " + artigo + "</h2>")
    }else{
        res.send("Bem vindo ao meu blog!"); 
    }
    
});

app.get("/canal/youtube",function(req, res){
    var canal = req.query["canal"];
    if(canal){
        res.send(canal);
    }else{
        res.send("sem canal fornecido")
    } 
});

app.get("/ola/:nome/:empresa", function(req, res){ //parametro obrigatório
    //req => dados enviados pelo usuário
    //res => dados enviados pelo servidor
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<hi>Oi " + nome + " do(a) " + empresa + "</h1>");
});

app.listen(4000,function(erro){ 
    if(erro){
        console.log("Ocorreu um erro")
    }else{
    console.log("Servidor iniciado com sucesso")
}
})
