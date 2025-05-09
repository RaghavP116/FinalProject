const http = require('http');
const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://vpara5:Raghav@cluster0.0jhb6ut.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri);

async function getWorkoutdata() {
    await client.connect();
    const cursor = client.db("gymDatabase").collection("workoutCollection").find({});
    const results = await cursor.toArray();
    await client.close();
    return results;
}

const server = http.createServer( async (req, res) => {

    console.log(req.url);
   
    /*

    if req url is /api send db.json data
    if req url is / send portfolio
    else send 404

    */

    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.url === '/'){

        // read my portfolio file

        fs.readFile(path.join(__dirname,'public','index.html'), 'utf-8', (err, data) => {
            if (err)  throw err ;
            res.writeHead(200, {
                'Content-Type': 'text/html'
                
            });
            res.end(data)
        }
        );
        // res.end("my home page");
    }
    else if (req.url === '/api') {
        try {
            const data = await getWorkoutdata();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(data));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Database error');
        }
    } 
    else{
        res.end("<h1>Error Loading the page, STATUS 404 </h1>");
    }
});
server.listen(8098, () => {
    console.log("Yay! Server is running on http://localhost:8098");
});