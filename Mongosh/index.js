const mongoose = require("mongoose"); // Import mongoose

// =============================
// CRUD------>
// C-> create -> insertMethod()
// R-> reade -> findMethod()
// U -> update -> updateMethod()
// D -> delete -> deleteMethod()

//  *NOTE -> all are methods in mongoose


main()
  .then(() => {
    console.log("Connected to MongoDB successfully!!");
  })
  .catch((err) => console.log(err));

// Async function to connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// Define the schema for a user
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// InsertOne data into MongoDB using the model
const user1 = new User({
  name: "adam",
  age: 23,
  email: "adam123456@gmail.com",
});
user1
  .save()
  .then(() => console.log(" db saved successfully!"))
  .catch((err) => console.log(err));
//================================
// insertMany data into MongoDB using the model

User.insertMany([
  { name: "satish", age: 23, email: "sam@gmail.com" },
  { name: "chandra", age: 20, email: "chandra00000@gmail.com" },
  { name: "volvo", age: 56, email: "volvo@gmail.com" },
]).then((data) => {
  console.log(data);
});

User.find({})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

// =====  for the condition base

User.find({ age: { $lt: 27 } })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

User.findById("66bd8c6dbe3db18b09a543a6")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err));

User.updateOne({ name: "satish" }, { age: 90 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

User.updateMany({ age: { $gt: 80 } }, { age: 23 })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

User.findOneAndUpdate({ name: "adam" }, { age: 40 }, { new: true })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

User.findByIdAndUpdate("66bd8a09e3847330b0e7f564", { age: 70 }, { new: true })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

User.deleteOne({ name: "adam" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

User.deleteMany({ age: { $gt: 16 } })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


