const express = require('express');

const bodyParser = require('body-parser');
const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the promotions to you!');
})
.post((req,res,next)=>{
    res.end('Will add the promotion : ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.end('Will Update the promotion : ' + req.body.name + 'with details : ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end('Will delete the promotion : ' + req.body.name + 'with details : ' + req.body.description);
});

promoRouter.route('/:promoID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the promotions to you!');
})
.post((req,res,next)=>{
    res.end('Will add the promotion : ' + req.params.promoID + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.end('We Will update the promotion: ' + req.params.promoID + ' with details: ' + req.body.description);
   
})
.delete((req,res,next)=>{
    res.end('Will delete the promotion : ' + req.params.promoID + 'with details : ' + req.body.description);
});

module.exports = promoRouter;
