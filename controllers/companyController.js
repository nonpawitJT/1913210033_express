exports.company = (req, res, next) =>
    res.status(200).json({
        data: [{
            id: 1, name: "Beartai", address: { province: "Bangkok", postcode: 10320 }
        },
        {
            id: 2, name: "Bitkub", address: { province: "Bangkok", postcode: 10110 }
        },
        {
            id: 3, name: "Station Online", address: { province: "Bangkok", postcode: 10560 }
        },
        ]
    })