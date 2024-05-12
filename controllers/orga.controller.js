const db = require("../models");
const Orga = db.orga;

exports.create = function (req, res) {
    // Valider la requête
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    // Rechercher un donateur avec le même e-mail
    Orga.findOne({ email: req.body.email })
        .then(existingorga => {
            if (existingorga) {
                // Un donateur avec le même e-mail existe déjà
                res.status(401).send({ messageC: "Un donateur avec cet e-mail existe déjà!" });
                return;
            }

            // Créer un nouveau donateur
            const orga = new Orga({
                orgaName: req.body.orgaName,
                password: req.body.password,
             
                address: req.body.address,
                email: req.body.email,
             
            });

            // Enregistrer le donateur dans la base de données
            orga.save()
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
