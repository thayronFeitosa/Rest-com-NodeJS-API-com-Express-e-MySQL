const express = require('express');
const consing= require('consign');

module.exports =() =>{

    const app = express();
    
    consing()
        .include('controller')
        .into(app)

    return app;
}