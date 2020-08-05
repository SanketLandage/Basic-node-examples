const express = require('express');

const bodyParser = require('body-parser');
const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
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
    res.statusCode = 403;
    res.end('DELETE operation caanot be performed');
});

leaderRouter.route('/:leaderID')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next)=>{
    res.end('Will send all the leaders dettails  to you!');
})
.post((req,res,next)=>{
    res.statusCode = 403 ;
    res.end('POST operation cannot be performed on /leaders');
})
.put((req,res,next)=>{
    res.end('We Will update the leader with ID: ' + req.params.leaderID + ' and with details: ' + req.body.description);
   
})
.delete((req,res,next)=>{
    res.statusCode = 403;
    res.end('DELETE operation caanot be performed on');
});

module.exports = leaderRouter;
