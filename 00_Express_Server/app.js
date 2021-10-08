const express=require('express');
const app=express();

const bodyParser = require('body-parser');

const cors=require('cors');




const hostname='127.0.0.1';
const port=8085;

const jsonParser=bodyParser.json()
const urlencodedParser=bodyParser.urlencoded({extended:false})

app.use(jsonParser)
app.use(urlencodedParser)

app.use(cors)

app.get('/', (request,response)=>{
  response.send("<h1>welcome</h1>")
})

app.listen(port,hostname,()=>{
  console.log(`Server running at http://${hostname}:${port}/`)
})


