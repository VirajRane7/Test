// import fetch from "node-fetch";
const express = require("express");
const app = express();
const mysql = require("mysql2");
const fetch = require("node-fetch");
process.env.TZ = "Asia/Calcutta";

var isStop1 = true;
var isStop2 = true;
var isStop3 = true;
var isStop4 = true;

var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;



function timer1() {
    if (isStop1 == false) {
        b1++;
        console.log(b1);
        setTimeout(timer1,1000);
    }

   
}

function timer2() {
     if (isStop2==false) {
        b2++;
        console.log(b2);
        setTimeout(timer2,1000);
    
    }
}

function timer3() {
    if (isStop3==false) {
       b3++;
       console.log(b3);
       setTimeout(timer3,1000);
   
   }
}


function timer4() {
    if (isStop4==false) {
       b4++;
       console.log(b4);
       setTimeout(timer4,1000);
   
   }
}


const db = mysql.createPool({
    host: "db4free.net",
    user: "homeautouser",
    password: "homeauto@123",
    database: "homeauto"
}); 

// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "@12345678",
//     database: "hometest"
// }); 

let state1 = 0;
let state2 = 0;
let state3 = 0;
let state4 = 0;



function fetchData() {
    
    setInterval(function () {
       
        
    
    let n = fetch("https://blynk.cloud/external/api/get?token=WmcxdFqb008EAVLUyMXGbtiRPSZiSzUv&V1")
    n.then((response)=>{
        return response.json()
    }).then((value)=>{
        // console.log(value)
        if (value == 1) {
            if (state1==0) {
                state1 = 1;
                checkState(state1, "Button_1");
                isStop1 = false;
                timer1()
            }
            
        //    console.log(b1); 
            
        }else{  
            if (state1==1) {
                
                state1=0;
                checkState2(state1, "Button_1");
                isStop1 = true;
            }
        //    console.log("Button 1 off"); 
            

        }
    })

     n = fetch("https://blynk.cloud/external/api/get?token=WmcxdFqb008EAVLUyMXGbtiRPSZiSzUv&V2")
    n.then((response)=>{
        return response.json()
    }).then((value)=>{
        // console.log(value)
        if (value == 1) {
            if (state2==0) {
                state2=1
                checkState(state2, "Button_2")
                isStop2 = false;
                timer2()
            }

           
            
        }else{
           
            if (state2==1) {
                state2=0;
                checkState2(state2, "Button_2");
                isStop2 = true;
            }

        }
    })

    n = fetch("https://blynk.cloud/external/api/get?token=WmcxdFqb008EAVLUyMXGbtiRPSZiSzUv&V3")
    n.then((response)=>{
        return response.json()
    }).then((value)=>{
        // console.log(value)
        if (value == 1) {
           if (state3==0) {
            state3 = 1;
            checkState(state3, "Button_3");
            isStop3 = false;
            timer3();
        }
            
        }else{
          
            if (state3==1) {
                state3 = 0;
                checkState2(state3, "Button_3");
                isStop3 = true;
            }

        }
    })

    n = fetch("https://blynk.cloud/external/api/get?token=WmcxdFqb008EAVLUyMXGbtiRPSZiSzUv&V4")
    n.then((response)=>{
        return response.json()
    }).then((value)=>{
        // console.log(value)
        if (value == 1) {
           if (state4==0) {
            state4=1;
            checkState(state4, "Button_4");
            isStop4 = false;
            timer4();
           }
            
        }else{
           
            if (state4==1) {
                state4=0;
                checkState2(state4, "Button_4")
                isStop4 = true;
            }


        }
    })
}, 1000)
}



function checkState(state,statename) {
    // start();
    //   console.log(statename);
    // let s = statename;
    if (state == 1) {
        console.log("state is 1");
        const sqlInsert = "INSERT INTO button_logs ( state ,date, time , button_name) VALUES ('ON',CURDATE(),?, ?)";
        db.query(sqlInsert,[new Date().toTimeString().substring(0,8),statename],(error,result)=>{
                    console.log("Error ",error);
                    console.log("Result", result);
                    // res.send("Hello Express");
            });
    }
}

function checkState2(state, statename) {
    if (state == 0) {
        console.log("state is 0");
        const sqlInsert = "INSERT INTO button_logs ( state,date, time , button_name) VALUES ('OFF',CURDATE(),?,?)";
        db.query(sqlInsert, [new Date().toTimeString().substring(0,8),statename], (error,result)=>{
                    console.log("Error ",error);
                    console.log("Result", result);
                    // res.send("Hello Express");
            });
    }
}

fetchData();

app.get("/", (req, res) => {

    res.send("Hellooo "+ b1 +" " + b2 + " " + b3 + " " + b4)

});
app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
})
