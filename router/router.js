// import express from "express";
// import parties from "../controllers/parties";
// import office from "../controllers/office";
const express = require("express");
const parties = require("../controllers/parties");

const router = express.Router();

router.get("/parties/", parties.getParties);

// exports = router;
module.exports = router;
