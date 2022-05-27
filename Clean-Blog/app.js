const express = require('express');

const port = 3000;

const app = express();

app.get('/', (req, res) => {
    const blog = { 
        id: 1, 
        title: "Blog title", 
        description: "Blog description " 
    }
    res.send(blog);
});

app.listen(port, ()=> {
    console.log(`Server started at port: ${port}`);
});