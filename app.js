const express = require("express");

const app = express();
app.use(express.json());

const contactos = ['Fabio','Mario','Vilar', 'Calixto'] ;

app.get("/contato", (req, res) => {
 return res.json(contactos);

});



app.get("/contato/:id", (req, res)=> {
    
    const {id} = req.params;
   

    return res.json({ 
          id,
         nome: contactos[id]
        
        });

});

//USANDO O POST PARA CADASTRAR

app.post("/contato", (req, res)=>{
    const {nome} = req.body;
    contactos.push(nome);
    return res.json(contactos);


});


app.listen(8080, ()=> {
    console.log("Sevidor iniciado na  porta 8080");
});