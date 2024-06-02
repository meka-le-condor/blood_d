const db = require("../models");
const Donor = db.donor;

exports.create = function (req, res) {
    // Valider la requête
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Rechercher un donateur avec le même e-mail
    Donor.findOne({ email: req.body.email })
        .then(existingDonor => {
            if (existingDonor) {
                // Un donateur avec le même e-mail existe déjà
                res.status(401).send({ messageC: "Un donateur avec cet e-mail existe déjà!" });
                return;
            }

            // Créer un nouveau donateur
            const donor = new Donor({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                address: req.body.address,
                password: req.body.password,
                email: req.body.email,
                groupe: req.body.groupe,
                lastDonate: req.body.lastDonate
            });

            // Enregistrer le donateur dans la base de données
            donor.save()
                .then(data => {
                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Une erreur s'est produite lors de la création du donateur."
                    });
                });
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Une erreur s'est produite lors de la recherche du donateur." });
        });
};

exports.findAll = (req, res) => {
    Donor.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Une erreur s'est produite lors de la récupération des donateurs."
            });
        });
};

