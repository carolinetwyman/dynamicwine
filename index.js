
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
//const routes = require("./src/routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
//Var User = require("../dynamicwine/client/src/models/users/userModel.js");
//Var Wine = require("./client/src/models/wines/wineModel.js");
const app = express();

app.use([
    express.urlencoded({ extended: false }),
    express.json()
]);

app.use(logger("prod"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/dynamicwine',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// app.post("/submit", ({ body }, res) => {
//   User.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// app.post("/submit", ({ body }, res) => {
//   Wine.create(body)
//     .then(dbWine => {
//       res.json(dbWine);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// Link API Routes here

//app.use(routes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log("🚀  Server server now on port", "👻 React App on Port 3000");
});