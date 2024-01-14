const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");
const passport = require("passport");

router.get("/login", authController.login);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  authController.google_redirect
);

module.exports = router;
