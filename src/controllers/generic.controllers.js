const saveGeneric = [];


const renderIndex = (req, res) => {
    res.render('index' , {saveGeneric} );
};

const renderNewGeneric = (req, res) => {
    res.render('form');
};

const saveNewGeneric = (req , res) => {
    const newSave = {
        titulo: req.body.titulo,
        des:    req.body.des,
        publicado: new Date()
    
    }
    saveGeneric.push(newSave);
    res.redirect('/');
};

const clearGeneric = (req, res) => {
  
    saveGeneric.splice(0, saveGeneric.length);

    res.redirect('/');
};

module.exports = {
renderIndex, 
renderNewGeneric,
saveNewGeneric,
clearGeneric
}