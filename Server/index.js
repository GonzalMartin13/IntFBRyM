const http = require("http")
const {getCharById} = require("./controllers/getChardBYId")
const port = 3001;

const server = http.createServer((res, req) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")){ 
        const id = req.url.split("/").at(-1)  
        getCharById(res, +id)
        }
    });
    
    server.listen(port,"localhost")