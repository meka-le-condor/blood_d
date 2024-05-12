
const donor = require("../controllers/donor.controller");
const orga  = require("../controllers/orga.controller");
const login  = require("../controllers/login.controller");

let router = require("express").Router();

//Create a new donor
router.post("/create/donor", donor.create);
router.post("/create/orga", orga.create);
router.post("/login", login.findOne);



module.exports = router;