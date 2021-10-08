const express=require('express');
const app=express();

const bodyParser = require('body-parser');

const cors=require('cors');

//importing  the Api Router
const apiRouter=require('./api/apiRouter')


const hostname='127.0.0.1';
const port = process.env.port||8900;

const jsonParser=bodyParser.json()
const urlencodedParser=bodyParser.urlencoded({extended:true})

app.use(jsonParser)
app.use(urlencodedParser)

// let corsOptions = {
//   origin: "http://localhost:8900"
// };

//configuring the apiRouter if a url comes with /api it will redirect it to the router page


app.use(cors());

app.use('/api',apiRouter)

app.get('/', (request,response)=>{
  response.send("<h1>welcome TO Node JS</h1>")
})

app.listen(port, () => {
  console.log(`Server is running on port http://${hostname}:${port}.`);
});

