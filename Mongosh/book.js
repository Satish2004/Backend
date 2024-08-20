const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connected to MongoDB successfully!!");
  })
  .catch((err) => console.log(err));

// Async function to connect to MongoDB
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// Define the schema for a book
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,


  },
  category:{
 type: String,
 enum: ["fiction", "non-fiction"],

  },
  genre: [String],

});

// Create a model based on the schema
const Book = mongoose.model("Book", bookSchema);

// Insert the data using the save method
let book1 = new Book({
  title: "Mathematics",
  author: "RD Sharma",
  price: 1200,
  category: "fiction",
  genre: ["comics","funny", "jokes"],
});

book1.save()
  .then((data) => console.log("Book saved:", data))
  .catch((err) => console.log("Error saving book:", err));



// ===========UPDATE===========
Book.findByIdAndUpdate("66bdc530726d66d0b756af8b", {author: "satish"})
  .then((data) => console.log("Book updated:", data))
  .catch((err) => console.log("Error updating book:", err));