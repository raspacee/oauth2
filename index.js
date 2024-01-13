require("dotenv").config();
const express = require("express");
require("./config/passport.js");
const mongoose = require("mongoose");
const indexRouter = require("./routes/index.router.js");
const authRouter = require("./routes/auth.router.js");
const cookieSession = require("cookie-session");
const passport = require("passport");

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ddpcwcj.mongodb.net/?retryWrites=true&w=majority`
);

app.set("views", "views");
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/auth", authRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  return res.status(400).send(err);
});

app.listen(3000, () => console.log("Application listening on port: " + 3000));
