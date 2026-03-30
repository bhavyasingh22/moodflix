const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

// CORS
res.setHeader("Access-Control-Allow-Origin","*");
res.setHeader("Access-Control-Allow-Methods","GET, POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers","Content-Type");

// preflight request
if(req.method === "OPTIONS"){
res.writeHead(200);
res.end();
return;
}

// MOVIES API
if(req.url === "/movies" && req.method === "GET"){

fs.readFile("movies.json","utf8",(err,data)=>{

if(err){
res.writeHead(500);
res.end("Error reading movies");
return;
}

res.writeHead(200,{"Content-Type":"application/json"});
res.end(data);

});

}

// REGISTER API
else if(req.url === "/register" && req.method === "POST"){

let body = "";

req.on("data",(chunk)=>{
body += chunk;
});

req.on("end",()=>{

const newUser = JSON.parse(body);

fs.readFile("users.json","utf8",(err,data)=>{

let users = [];

if(!err && data){
users = JSON.parse(data);
}

// add new user
users.push(newUser);

fs.writeFile("users.json",JSON.stringify(users,null,2),(err)=>{

if(err){
res.writeHead(500);
res.end("Error saving user");
return;
}

res.writeHead(200,{"Content-Type":"application/json"});
res.end(JSON.stringify({message:"User Registered Successfully"}));

});

});

});

}

// LOGIN API
else if(req.url === "/login" && req.method === "POST"){

let body = "";

req.on("data",(chunk)=>{
body += chunk;
});

req.on("end",()=>{

const loginUser = JSON.parse(body);

fs.readFile("users.json","utf8",(err,data)=>{

let users = [];

if(!err && data){
users = JSON.parse(data);
}

let found = users.find(
u => u.email === loginUser.email && u.password === loginUser.password
);

if(found){

res.writeHead(200,{"Content-Type":"application/json"});
res.end(JSON.stringify({message:"Login Success"}));

}else{

res.writeHead(401,{"Content-Type":"application/json"});
res.end(JSON.stringify({message:"Invalid Email or Password"}));

}

});

});

}

});

server.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});