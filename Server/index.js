const http = require("http")
const data = require("./utils/data")

http.createServer((res, req) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")){   
        const urll = req.url
        const characterId = parseInt(urll?.split("/rickandmorty/character")[1])
        const pjElegido = data.filter((chara) => chara.id === characterId)
        res.write(200, {"Content-Type":"application/JSON"})
        return res.end(JSON.stringify(pjElegido))
        }
    }).listen(3001,"localhost")