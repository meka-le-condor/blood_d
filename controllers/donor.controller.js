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
            firstName: req.body.firstName,
            lastName:  req.body.lastName,
            address:  req.body.address,
            email:  req.body.email,
            groupe:  req.body.groupe,
            lastDonate:  req.body.lastDonate,
        
        
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
   