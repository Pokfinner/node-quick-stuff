const express = require('express');
require('dotenv').config();

const app = express();
const port = 3000;

// API endpoint
app.get('/data', (req, res) => {

    const name = process.env.NAME

    if (!name){
        res.send("Hello World!");
    }
    else{
        res.send(`Hello ${name}`)
    }


});

// Start server
app.listen(port, () => {
    console.log(`API server listening on port ${port}`);
});