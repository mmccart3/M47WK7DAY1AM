const express = require("express");
// note ES5 syntax is rqeuired. can't use import yet
const app = express()
//just convention to remap express to app

app.use("/books",express.static("books"))
// first parameter is the end point written by the user in the browser bar after the web address of the server, the second parameter routes any requests to the folder "books" on our server. 
app.use("/",express.static("Anotherroute"))
// "/" is the route with no endpoint and then is mapped to folder anotherroute

app.listen(5001, () => console.log("server is listening on port 5001"));
// first paramater is the port to listen on and second parameter is a function to execute upon execution
