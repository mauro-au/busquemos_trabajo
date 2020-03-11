var express = require("express");
var router = express.Router();


router.get('/', function(req, res, next) {
    res.render('jobs',{title: 'Empleos Github', subtitle: 'Ofertas de Trabajo'})
})

module.exports=router