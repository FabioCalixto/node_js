const express = require("express");

const app = express();
app.use(express.json());

const contactos = ['Fabio','Mario','Vilar', 'Calixto'] ;

/*
app.use( (req, res, next)=> {
   
      console.log("Acessou o Middleweres!");
      next();

});*/

function valContato(req, res, next){
      if(!req.body.nome){
          return res.status(400).json({
              error: "Necessário enviar o Nome!"
          })
      }
      return next();
}

function valPosContato(req,res, next){
      if(!contactos[req.params.id]){
          return res.status(400).json({
              error: "Contacto não Encontrado"
          })
      }
      return next();
}


//USANDO O GET NA REST API PARA LISTAR
app.get("/contato", (req, res) => {
    
    return res.json(contactos);

});



app.get("/contato/:id", valPosContato, (req, res)=> {
    
    const {id} = req.params;
   

    return res.json({ 
          id,
         nome: contactos[id]
        
        });

});

//USANDO O POST PARA CADASTRAR

app.post("/contato", valContato, (req, res)=>{
    const {nome} = req.body;
    contactos.push(nome);
    return res.json(contactos);

});

//USANDO O PUT NA REST PARA EDITAR
app.put("/contato/:id",valContato,valPosContato , (req, res)=> {
    const {id} = req.params;
    const {nome} = req.body;

    contactos[id] = nome;
    return res.json(contactos);

});

//USANDO O DELETE NA REST API PARA APAGAR UM REGISTRO
app.delete("/contato/:id",valPosContato , (req, res) =>{
        const  {id } = req.params;
        contactos.splice(id,1);
        return res.json(contactos);


})




app.listen(8080, ()=> {
    console.log("Sevidor iniciado na  porta 8080");
});