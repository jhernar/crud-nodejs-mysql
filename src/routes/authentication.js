const express = require("express");
const router = express.Router();

const passport = require("passport");

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.post(
  "/signup",
  passport.authenticate("local.signup", {
    successRedirect: "/profile",
    failureRedirect: "/signup",
    failureFlash: true,
  })
);

router.get("/signin", (req, res) => {
  res.render("auth/signin");
});

router.post("/singin", (req, res, next) => {
  passport.authenticate("local.singin", {
    successRedirect: "/profile",
    failureRedirect: "/singin",
    failureFlash: true,
  })(req, res, next);
});

router.get("/profile", (req, res) => {
  res.send("Profile");
});

module.exports = router;
