const HomeModel = require("../models/HomeModel");

HomeModel.create({
  titulo: "um titulo de teste",
  descricao: "Uma descriçaõ de teste"
})
  .then( dados => console.log( dados ))
  .catch( e => console.log( e ));

//get /
exports.paginaInicial = (req, res) => {
  res.render('index');
  return
};

// post /
exports.trataPost = (req, res, next) => {
  res.send('Ei, sou sua nova rota de POST. => ' +req.body.Cliente);
  return
};



// formato objeto
/*
class HomeController { 

  constructor(){
  }


  //routa.get ( / )
  paginaInicial(req,  res ) {

      res.render("index");
  }

  // route.post( "/",)
  trataPost(req,  res ){
      res.send("tratamento do post " + req.body.nome + "\n "+
      "outro campo -> "  + req.body.outrocampo + "<h1> ola </h1>");
  } 


}


module.exports = HomeController;
*/