const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello world II!');
})

app.listen(port);
console.log('Server on port', port);