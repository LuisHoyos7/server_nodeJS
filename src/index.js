// para utilizar  el paquete express 
const express = require('express');

//ruta del path del servidor 
const path = require('path');

//paquete para poder ver las peticiones al servidor 
const morgan = require('morgan');


//inicializacion de exprees 
const index = express();

//configuraciones generales 

//configuracion de puertos 
index.set('port', process.env.PORT || 3000);
// indicamos donde estan las vistas 
index.set('views' , path.join(__dirname, 'views'));
// utilizamos el motor de plantillas ejs 
index.set('view engine' , 'ejs');

//middelware 
//morgan nos permite mirar las peticiones a nuestro servidro , puede recibir
// diferentes argumentos en este caso dev que da una descripcion corta de la pericion
index.use(morgan('dev'));

//este metodo de express nos permite traer un json 
index.use(express.urlencoded( {extended : false} ));

//ROUTES 
//requerimos las rutas 
index.use(require('./routes/generic.routes'));

//errores 
index.use((req, res) => {
    res.status(404).render('404');
});


// iniciar aplicacion 

index.listen(index.get('port'), () => {
    console.log('server escucha en el puerto:', index.get('port'));
});
