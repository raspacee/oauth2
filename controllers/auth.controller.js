const express = require("express");

exports.login = (req, res, next) => {
  res.render("login");
};

exports.google_redirect = (req, res, next) => {
  res.send(req.user);
};
