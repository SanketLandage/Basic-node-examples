const express = require('express');

const bodyParser = require('body-parser');
const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!');
})
.post((req,res,next)=>{
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req,res,next)=>{
    res.statusCode = 403 ;
    res.end('Put operation cannot be performed on /dishes');
})
.delete((req,res,next)=>{
    res.end('Will delete the dish : ' + req.body.name + 'with details : ' + req.body.description);
});

dishRouter.route('/:dishID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the dishes to you!');
})
.post((req,res,next)=>{
    res.statusCode = 403 ;
    res.end('POST operation cannot be performed on /dishes');
})
.put((req,res,next)=>{
    res.end('We Will update the dish: ' + req.params.dishID + ' with details: ' + req.body.description);
   
})
.delete((req,res,next)=>{
    res.end('Will delete the dish : ' + req.params.dishID + 'with details : ' + req.body.description);
});

module.exports = dishRouter;
