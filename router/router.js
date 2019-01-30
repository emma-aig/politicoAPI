const express = require("express");
const router = express.Router();
const parties = require("../controllers/parties"); 

router.get("/parties/:id", parties.getParty);

module.exports = router;
