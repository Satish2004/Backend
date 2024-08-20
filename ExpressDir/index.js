
const express = require("express");
const app = express();

let port = 8421;

app.listen(port , ()=>{

    console.log(`port is listening ${port}`);
    // where server is make but there is not sending the response therefore its return in web site 
    //<<<<<<---"cannot GET /"---->>>>>> 

});
// app.use((req , res)=>{
//     console.log("done"); // for the recieve the request from the user
//     // what can i do for sending the response to client side

//     res.send([
//         "satish", "chandra" , 23
//     ]); // we can pass anytype of the body like string ,html , array and object
//     // express js treat as JSON formate when the body is form of array and ovbject

// })


// =============ROUTES===>
    app.get("/", (req , res)=>{
        res.send("you connected root path");

   });
//     app.get("/apple", (req , res)=>{
//         res.send("you connected with apple path");
//     });

//     app.get("/orange", (req , res)=>{
//         res.send("you connected with orange path");
//     });

//     // app.get("*",(req , res)=>{
//     //     res.send("ohhh oo this page is not found!!!");

//     // });
// app.post("/", (req, res)=>{
//     res.send("hello post");
// });

// ===================CUSTOME SET ROUTE============>


    app.get("/:username/:id",(req, res)=>{

        let {username , id}= req.params;
        let  htmlstr = `<h1>Welcome to @${username} page !!</h1>`
        res.send(htmlstr);

    })
    app.get("/search",(req, res)=>{
      console.log(req.query);
        let {q} = req.query; // distructuring
        if(!q){
            res.send("sorry !!!");
        }
        // 
        res.send(`<h1>you searched = ${q}</h1>`); // q name dena neccesaary hai tabhi chalega
    })