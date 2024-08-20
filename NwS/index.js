const express = require("express");
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));


// Get the client
const mysql = require("mysql2");

// Create the connection to the database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "first_app",
  password: "imsachandra@120321",
});

//define the connection
// let q = "SHOW TABLES";
//   try{

// connection.query("SHOW TABLES", (err, result)=>{
//   if(err) throw err;
//   // print all the result from the mysql
//  // its is 1st way -->  work bench waay
//   console.log(result[0]);
//   console.log(result[1]);
//   console.log(result);
// });
// }
// catch(err){
//   console.log(err);

// }

//INSERT USER
// where q is the uery of the mysql
let q = "INSERT INTO user (id , usernme , email, paassword) VALUES ?";
// agr array of array of the array wala aayeg to (?,?,?,?) ki jgh ?
// and user--> [user]

// let user =["1a","casy", "casy@gmail.com", "123casy"];

// also we assign multiple user from the array of the array like matrix arr
// let user = [
//   ["1a", "casy", "casy@gmail.com", "123casy"],

//   ["1b", "bob", "bob@gmail.com", "123bob"],
// ];


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};
// console.log(getRandomUser());



// Route
app.get("/", (req, res) => {
  // let q = "select count(*) as count from user";
  let q = "SELECT COUNT(*) AS COUNT FROM USER";
  connection.query(q, (err, result) => {
    if (err) {
      return res.send("Hmmm....! Some error from the database");
    }
    let count = result[0]["count"];
    res.render("home.ejs", { count });
  });
});

app.listen(9091, () => {
  console.log("I am listening on port 9091");
});
