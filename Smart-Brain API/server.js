const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");
const knex = require("knex");

const register = require("./controllers/register");

const signin = require("./controllers/signin");

const profile = require("./controllers/profile");

const image = require("./controllers/image");
// commands below are connecting the server to the database
const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "test",
    database: "smart-brain",
  },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("success");
});
// below is for the signin using bcrypt (will be used with the setup of database) to check against user passwords
app.post("/signin", signin.handleSignin(db, bcrypt));

// below is for register of new users, trx is used to get the data into the databses as a transaction
app.post("/register", (req, res) => {
  register.handleRegister(req, res, db, bcrypt);
});

// below is for the Profile setup of the users
app.get("/profile/:id", (req, res) => {
  profile.handleProfileGet(req, res, db);
});

// below is for updating the users entries to show each time they submit an image
app.put("/image", (req, res) => {
  image.handleImage(req, res, db);
});
app.post("/imageurl", (req, res) => {
  image.handleApiCall(req, res);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

// 1. rootroute responds with "working" 2. signin ---> post = success or fail 3. register to add data which is a POST as well for users 4.Profile with userid so each user has a homescreen using a GET 5.IMage ---> PUT ---> returns updated data/user etc
