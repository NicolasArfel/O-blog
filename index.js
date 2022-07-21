const express = require('express');
const app = express();
const router = require('./router')

const port = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('static'));

app.use(router);

app.listen(port, ()=> {
    console.log(`server ready on http://localhost:${port}`)
})

