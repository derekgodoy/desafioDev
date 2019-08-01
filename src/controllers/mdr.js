'use strict'

exports.get = (req, res, next) => {
    res.status(200).send([{
        Adquirente: "Adquirente A",
        Taxas: [
            {
                Bandeira: "Visa",
                Credito: 2.25,
                Debito: 2.00
            },
            {
                Bandeira: "Master",
                Credito: 2.35,
                Debito: 1.98
            }
        ]
    },
    {
        Adquirente: "Adquirente B",
        Taxas: [
            {
                Bandeira: "Visa",
                Credito: 2.50,
                Debito: 2.08
            },
            {
                Bandeira: "Master",
                Credito: 2.65,
                Debito: 1.75
            }
        ]
    },
    {
        Adquirente: "Adquirente C",
        Taxas: [
            {
                Bandeira: "Visa",
                Credito: 2.75,
                Debito: 2.16
            },
            {
                Bandeira: "Master",
                Credito: 3.10,
                Debito: 1.58
            }
        ]
    }

]);
};