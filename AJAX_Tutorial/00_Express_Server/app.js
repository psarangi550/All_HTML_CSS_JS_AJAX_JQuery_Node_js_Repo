//here first we need to load the the express server
const express = require('express')//importing the express module into this entry point app.js
const app=express();//initiating the express module and assigning to variable as app which is the same name for the entry file
//we need to load one more module called body parser to fetch the form data sent by the client browser
const bodyParser=require('body-parser');//loading the body parser module
//now we have to load to load the cors for cross browser compatibility
const cors=require('cors')//loading the cors module to the entry point

//importing the apiRouter
const apiRouter=require('./api/apiRouter')
//loading the module using the require() function


//configuring the hostname
const hostname='127.0.0.1'
//configuring the port name
const port=process.env.PORT||8911





//now we have to configure the bodyParser and cors
//for bodyParser
//for the body parSer the client can sent the data in either json format or urlEncoded format
//for the json format
const jsonParser=bodyParser.json()//using the json() on the bodyParser variable to fetch the jsonParse
const urlencodedParser=bodyParser.urlencoded({extended: true})//taking the js object with property extended and value true
//using the urlencoded() on the bodyParser to fetch the urlencodedParser
//now we need to make it initialize using the express initialization variable
app.use(jsonParser)//using the json Parser
app.use(urlencodedParser)//using the urlEncodedParser
//now we need to configure the cors using the express initialize variable
app.use(cors())


//now we need to configure the apiRouter for the initial URL of the API
app.use("/api",apiRouter)
//here any request coming from the client browser to the server we starts with /api it will be transferred






//now for the get request we are checking
app.get("/",(request,response)=>{
  response.send(`<h3>Welcome to Express Server for the Employee Portal</h3>`)
})
//now we need to configure the port and host name
app.listen(port,hostname,()=>{
  console.log(`server started successfully http://${hostname}:${port}/`)
})
//for starting the server we can just typr node app.js
//now we need to configure for the api Router to put down the restAPI URL
//for that we need to create a directory api and inside that we need to create a route js file which is apiRouter.js
