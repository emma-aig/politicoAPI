// import express from "express";
// import parties from "../controllers/parties";

const express = require("express");
const parties = require("../controllers/parties");
const router = express.Router();

router.patch("/parties/:id", parties.updateParty);

module.exports = router;
// exports = router;
