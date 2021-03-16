const express = require("express");

const app = express();
const contactos = ['Fabio','Mario','Vilar', 'Calixto'] ;

app.get("/", (req, res)=> {

  return res.json(contactos);
});

app.get("/contato/:id", (req, res)=> {
    
    const {id} = req.params;
   

    return res.json({ 
          id,
         nome: contactos[id]
        
        });

})

app.listen(8080, ()=> {
    console.log("Sevidor iniciado na  porta 8080");
});