const db = require("../models");
const Donor = db.donor;
const Orga = db.orga;


exports.findOne=function (req,res){
     // Rechercher un donateur avec le même e-mail
     if (req.body.statut ==='donor') {

        
     
        Donor.findOne({ email: req.body.email , password: req.body.password})
        .then(existingDonor => {
            if (existingDonor) {
                
                res.status(200).send({ messageC: "donor" });
                return;
            }

            
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error d'authentification" });
     });
    }else{
        Orga.findOne({ email: req.body.email , password: req.body.password})
        .then(existingorga => {
            if (existingorga) {
                
                res.status(200).send({ messageC: "orga" });
                return;
            }

            
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Error d'authentification" });
     });


    }
} 