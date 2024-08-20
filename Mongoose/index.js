const mongoose = require("mongoose"); // before use we need dto require<----

main()
  .then((res) => {
    console.log("successfull!!");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
// to perform schema --> schema is basically a blueprint ki kya kya rakhna hai like documents ke andar we create name email and their age 
// for example we crteate schema of user 

const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

// model 
const User = mongoose.model("User" , userSchema);

// insert the data from the mongoose-->
const user1 = new userSchema({name:"adam", age:23, email:"adam123456@gmail.com"});
user1.save();