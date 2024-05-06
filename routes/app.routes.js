module.exports = app => {
const donor = require("../controllers/donor.controller");
let router = require("express").Router();
app.use("/api/donor", router);

//Create a new donor
    router.post("/createdonor", donor.create);
};