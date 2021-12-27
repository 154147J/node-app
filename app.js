const express = require('express');
const app = express();
const mongoose = require('mongoose');
const universityModel = require('./schema/university');
const name = require('./schema/name');


const connect = require('./test');

connect()


app.get('/university', (req,res)=> {
  res.send('hello')
})




app.listen(3000, () => {
    console.log('port 3000');
})