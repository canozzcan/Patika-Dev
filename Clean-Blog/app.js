const express = require('express');

const port = 3000;

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/post', (req, res) => {
    res.render('post');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/add_post', (req, res) => {
    res.render('add_post');
});


app.listen(port, ()=> {
    console.log(`Server started at port: ${port}`);
});