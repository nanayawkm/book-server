//import express,body-parser
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const {listbookController,updatebookController,createbookController,deleteBookController} = require("./controllers")

//create express server instance
const server = express();

//middlewares
server.use(bodyParser.json());

//Database



//Bank Model




//routes
server.get('/book/:id?', listbookController)
server.post('/book', createbookController)
server.put('/book', updatebookController)
server.delete('/book', deleteBookController)




//start server
mongoose.connect("mongodb+srv://codetrainUser:31tXdQb3qM77Ys79@atlascluster.wkvv0iy.mongodb.net/?retryWrites=true&w=majority",)
.then(result =>{
    server.listen(3001,function(){console.log('idey listen boss')})
}).catch(err => console.log(err))
