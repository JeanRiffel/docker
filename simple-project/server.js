const express = require('express');
const server = express();
const port = 3009;

server.get('/',(req, res)=>{
    res.send("Hello from docker container");
})

server.listen(port, ()=> console.log(`Server is running`));

