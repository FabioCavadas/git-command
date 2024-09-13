const express = require('express');
const port = process.env.PORT || 3001;
const app = express();

app.get('/', (req, res) =>{
    console.log('New feature')
})

app.get('/feature3', (req, res) =>{
    console.log('New feature3')
})

app.listen(port, () => {
    console.log('start listening ${port}');
})