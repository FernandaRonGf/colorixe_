 const express = require('express');
 const cors = require('cors');
 const request = require('request');
 const app = require('app');
 const dotenv = require('dotenv');
 const bodyParser = require('body-parser');
 
 //constans

const PORT = process.env.PORT;

 app.use(cors());
 app.use(bodyParser.json());

 app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});