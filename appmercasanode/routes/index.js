
/*
 * GET home page.
 
console.log("ingresa index.js");


*/
exports.index = function (req, res) {
    console.log("ingresa");
    //res.render('index', { title: 'Express' })
    var DATABASE = require('../custom_modules/database');
    var BD = new DATABASE();
    var productosBDSave;
    BD.getAllProducts(function (productosBD) {
        productosBDSave = productosBD;
        //console.log(productosBD);
        console.log("ingresa a bd");        
    });
    console.log("sale de bd");
    console.log(productosBDSave);
    //res.render('index', { title: 'MERCASA', productos: productosBDSave });
};