const express = require("express");
const app = express();

let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;

function fun() {
    setInterval(function () {
        b1++;
        b3++
    },1000)
}



fun();
app.get("/", (req, res) => {

    res.send("Hellooo " + b1 + " " + b2 + " " + b3 + " " + b4)
  
  });
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  })