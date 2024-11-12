const fs = require("fs");


//Sync functions
fs.writeFileSync("read.txt","Read1  -> Welcome! how are you?");

fs.appendFileSync("read.txt","\nI am fine");

const p = fs.readFileSync("read.txt","utf-8");
console.log(p)

//Async functions 

fs.writeFile("read2.txt","Read2  - > Welcome ! How are you ?",() =>{
    console.log("Data write done");
})

fs.readFile("read2.txt","utf-8",(error,res)=>{
    console.log(res)
})