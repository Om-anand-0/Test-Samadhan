const http = require("http");

const port = 3000;

const server = http.createServer((req,res)=>{
    if(req.url==='/api'){
        res.writeHead(200, {"Content-Type":"application/json"});
        res.end(JSON.stringify({message:"Hello, World!"}))
    }
    else{
        res.writeHead(404, {"Content-Type":"text/plain"})
        res.write("Not Found")
        res.end()
    }
});

server.listen(port, ()=>{
    console.log("server running on port "+port+" go to http://localhost:"+port+"/api")
})
