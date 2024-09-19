// console.log("Hello,  World!"); // Outputs: Hello, World! ""

// // const http = require('http')
// // console.log(http);

// import http from 'http'

// const server = http.createServer

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



// import http from 'http';
// import fs, { readFile } from 'fs'

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello, World!\n');
// });

// console.log(fs);

// const fileread = fs.readFileSync('./web.txt', 'utf-8')

// console.log(fileread);

// const newcontent =  "this is new file created through writefile function"
// fs.writeFile('index.php', newcontent, () =>{
//     console.log('File written successfully');
// })




// const port = 1000;

// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });





// Routing 


// const serverr = http.createServer((req,res) => {
//     if (req.url === '/') {
//         res.end("<h1> This is a Home Route</h1>")
//     } else if(req.url === '/about'){
//         res.end("<h1>This is a Abiut page</h1>")
//     } else if(req.url === '/juanid'){
//         res.end("<h1>This is a Juanid page</h1>")
//     }
// })


/* 

import http from 'http';  // Import the 'http' module

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html'); // Set the content type to HTML

    if (req.url === '/') {
        res.statusCode = 200; // OK status
        res.end("<h1>This is the Home Route</h1>");
    } else if (req.url === '/about') {
        res.statusCode = 200; // OK status
        res.end("<h1>This is the About page</h1>");
    } else if (req.url === '/junaid') {
        res.statusCode = 200; // OK status
        res.end("<h1>This is the Juanid page</h1>");
    } else {
        res.statusCode = 404; // Not Found status
        res.end("<h1>Page Not Found</h1>");
    }
});

// Define the port number
const port = 1000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}); */




