const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path  = require('path')
console.clear()
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "webs")));
app.use(bodyparser.json());




const { MongoClient, ServerApiVersion } = require('mongodb');
const user = encodeURI("admin");
const  pass = encodeURI("password3301")
const uri = `mongodb+srv://${user}:${pass}@cluster0.945jjgi.mongodb.net/`;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });








app.post("/data", (req, res) => {
  console.log("Data recieved to database route")
  let info = req.body;
  const user_id = enterdata(info)
  res.json({"hello":"hello"})
  res.end()
}
);

app.listen(8000,()=>{
    console.log("Database server")
})


















async function enterdata(data) {
  async function run() {
      try {
        console.log("Pinging the database......");
        console.log("----------------------------------------")


        await client.connect();
        await client.db("userdata").admin().command({ ping: 1 });
        console.log("Database connected");
        console.log("----------------------------------------")
        
        
        console.log("payload"+data);
        console.log("----------------------------------------")
        let database = client.db("userdata");
        let users = database.collection("userinfo");
        await users.insertOne(data);
        console.log(`Finshed upload`);
        console.log("----------------------------------------")
      
      
      
      
      } finally {
        console.log("Connection closed");
        console.log("----------------------------------------")
        await client.close();
      }






  }
  run().catch(console.dir);
}