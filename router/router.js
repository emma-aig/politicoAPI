// import express from "express";
// import parties from "../controllers/parties";

const express = require("express");
const parties = require("../controllers/parties");
const router = express.Router();

router.post("/parties/", parties.createParty);

module.exports = router;
// exports = router;
