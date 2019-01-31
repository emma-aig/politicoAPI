// import express from "express";
// import parties from "../controllers/parties";

const express = require("express");
const parties = require("../controllers/parties");
const router = express.Router();

router.get("/parties/:id", parties.getParty);

module.exports = router;
// exports = router;
