const axios = require("axios");
const express = require("express");
const app = express();
const fetch = require("node-fetch");



let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;

function fun() {
    setInterval(function () {
   axios.get("https://blynk.cloud/external/api/get?token=WmcxdFqb008EAVLUyMXGbtiRPSZiSzUv&V1")
    .then((res)=>{
        console.log(res.data);
    })

        console.log(b1);
        b1++;
        b3++
    },10000)
}



fun();
app.get("/", (req, res) => {

    res.send("Hellooo " + b1 + " " + b2 + " " + b3 + " " + b4)
  
  });
  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  })
