const express = require("express");

const app = express();

app.get("/", (req, res)=> {

    res.send("Olá Calixto");

});

app.get("/contato/:id", (req, res)=> {
    
    const id = req.params.id;
    const sit = req.query.sit;

    return res.json({ 
         id: id,
         nome: "Fabio",
         sit:sit
        });

})

app.listen(8080, ()=> {
    console.log("Sevidor iniciado na  porta 8080");
});