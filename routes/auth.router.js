const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");
const passport = require("passport");

router.get("/login", authController.login);

router.get("/logout", authController.login);

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/redirect",
  passport.authenticate("google"),
  authController.google_redirect
);

module.exports = router;
