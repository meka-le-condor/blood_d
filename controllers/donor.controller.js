const db = require("../models");
const Donor = db.donor;
exports.create = function (req, res) {

      // Validate request
      if (!req.body ) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
        }
        // Create a donor
        const donor = new Donor({
        name: req.body.name,
        //othher
        });
// Save donor in the database
    donor 
    .save(donor)
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
        message:
        err.message || "Some error occurred while creating the donor.",
    });
    });
};
   