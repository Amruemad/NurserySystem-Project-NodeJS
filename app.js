const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const TeacherRoutes = require("./Routes/TeacherRoutes");
const ClassRoutes = require("./Routes/ClassRoutes");
const ChildRoutes = require("./Routes/ChildRoutes");
const authenticationRoute = require("./Routes/AuthRoute");
const authenticationMW = require("./Middleware/AuthenticationMW");

const server = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/NurserySystem")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error in DB" + error);
  });

const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log("Server is running", port);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1st Middleware
server.use(morgan("tiny"));
server.use(cors());

// server.get("/posts", ( request, response, next)=> {
//     response.status(200).json({message: "Welcome to the posts route"});
// })

// server.post('/addStudent', (request,response, next)=> {
//     response.status(201).json({message:"Data has been added successfully!"});
// });

server.use(express.json());
server.use(authenticationRoute);
server.use(authenticationMW);
server.use(TeacherRoutes);
server.use(ClassRoutes);
server.use(ChildRoutes);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~2nd Middleware
server.use((request, response) => {
  response.status(404).json({ message: "Not found!" });
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~3rd Middleware
server.use((error, request, response, next) => {
  response
    .status(error.status || 500)
    .json({ message: "Internal Server Error" + error });
});
