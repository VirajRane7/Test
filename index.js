const express = require("express");
const app = express();
const fetch = require("node-fetch");



let b1 = 0;
let b2 = 0;
let b3 = 0;
let b4 = 0;

function fun() {
    setInterval(function () {
         let n = fetch("https://blynk.cloud/external/api/get?token=WmcxdFqb008EAVLUyMXGbtiRPSZiSzUv&V1")
    n.then((response)=>{
        return response.json()
    }).then((value)=>{
        // console.log(value)
        if (value == 1) {
            // if (state1==0) {
                // state1 = 1;
                // checkState(state1, "Button_1");
                // isStop1 = false;
                // timer1()
            // }
            
           console.log(value); 
            
        }else{  
            // if (state1==1) {
                
            //     state1=0;
            //     // checkState2(state1, "Button_1");
            //     // isStop1 = true;
            // }
        //    console.log("Button 1 off"); 
            

        }
    })
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
