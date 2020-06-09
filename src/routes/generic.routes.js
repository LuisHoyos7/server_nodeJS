//solo requerimos el metodo Router de express 
const { Router } = require('express'); 

//instaciamos Router 
const router = Router();

//importamos las funciones del controlador

const { renderIndex, renderNewGeneric, saveNewGeneric , clearGeneric } = require('../controllers/generic.controllers');

router.get('/', renderIndex);

router.get('/new-generic', renderNewGeneric);

router.post('/new-generic', saveNewGeneric);

router.get('/clear-generic', clearGeneric);

// exportamos las rutas 
module.exports = router;

