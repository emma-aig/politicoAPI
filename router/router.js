// import express from "express";
// import office from "../controllers/office";

const express = require("express");
const office = require("../controllers/office");
const router = express.Router();

router.post("/office/", office.createOffice);

module.exports = router;
// exports = router;
