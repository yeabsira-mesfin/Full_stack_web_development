/* This code creates a simple web server using Node.js and Express.js. It has two routes: one for the root path ('/') and another for '/yeabyy'. 
When you access these routes, the server sends back corresponding text responses to the client. You can start the server by running this script,
and it will be accessible at http://localhost:3000/ and http://localhost:3000/yeabyy in your web browser.*/

/*   This line imports the Express.js framework, which simplifies building web applications in Node.js. */
let express = require('express');

/* Here, an instance of the Express application is created. This app variable is used to configure and define routes for your web application */
let app = express();

/* This code sets up a route for the root URL path ('/'). When a user accesses the root URL of your web server, the function provided in the
second argument will be executed. In this case, it sends the string 'My first API' as a response to the client. */
app.get('/',function(request,response) {
    response.send('My first API');   
})

/*   This code sets up a route for the path '/yeabyy'. When a user accesses this URL, the function provided will send the string "Yeabby you're progressing" as a response. */
app.get('/yeabyy',function(request,response){
    response.send("Yeabby you're progressing")
})

/* This line tells Express to start listening on port 3000. When the server starts, it prints the message "First API running on port 3000!" to the console. */
app.listen(3000,function(){
    console.log("First API running on port 3000!")
})