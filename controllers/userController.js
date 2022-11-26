exports.index = (req, res, next) => {
    res.status(200).json({ Fullname: 'Nonpawit Nittaworn' })
}
exports.bio = (req, res, next) => {
    res.status(200).json({
        fullname: 'Nonpawit Nittaworn',
        nickname: 'Tan',
        hobby: 'Sleep',
        gitusername: 'nonpawitJT'
    })
}


