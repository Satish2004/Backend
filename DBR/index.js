const express = require("express");
const app = express();

const mysql = require("mysql2");


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "first_app",
  password: "imsachandra@120321",
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


let q = "INSERT INTO user (id , usernme , email, paassword) VALUES ?";

let data= [];
for(let i =1; i<=100; i++){
  data.push(getRandomUser());

}
console.log(data);




app.listen(9091, () => {
  console.log("I am listening on port 9091");
});
