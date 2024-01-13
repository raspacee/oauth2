const express = require("express");

exports.get_handler = (req, res, next) => {
  res.render("index", {
    message:
      "The first website was by an organization called CERN, you can still view it here: http://info.cern.ch",
  });
};
