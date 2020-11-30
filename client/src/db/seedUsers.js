const mongoose = require("mongoose");
const db = require("../models");

// Empty the Users and insert the user below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/userlist"
);

const userSeed = [
  {
    username: "caroline",
    password: "Hello123",
    email: "carolinetwyman@gmail.com",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });