
const donor = require("../controllers/donor.controller");
let router = require("express").Router();

//Create a new donor
router.post("/create/donor", donor.create);

module.exports = router;