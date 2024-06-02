
const donor = require("../controllers/donor.controller");
const orga  = require("../controllers/orga.controller");
const login  = require("../controllers/login.controller");

let router = require("express").Router();

//Create a new donor
router.post("/create/donor", donor.create);
router.get("/get/donor", donor.findAll);

router.post("/create/orga", orga.create);
router.get("/get/orga", orga.findAll);

router.post("/login", login.findOne);



module.exports = router;