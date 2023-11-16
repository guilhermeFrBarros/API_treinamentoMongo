const { app, express, mongoose } = require("./src/conection/conectionBD");




// mongoose.connect(process.env.CONECTIONSTRING )  // não precisso mais disso apos a versão 4.00: depois da CONECTIONSTRING { useNewUrlParser: true, useUnifiedTopology: true}
//             .then( ()=> {
//               console.log( "Conecteção do banco estabelecida" )
//               app.emit("pronto");
//             } )
//             .catch( (err)=> { 
//               console.log(err);
//               if(err) throw err;
//             }); 

const routes = require('./routes');
const path = require('path');
const { middleware } = require("./src/middlewares/middleware");

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// minhas middlewares
app.use( middleware );
app.use(routes);


app.on("pronto", ()=> {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
} );

