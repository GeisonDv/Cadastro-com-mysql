const { sequelize, Sequelize } = require('../config/database');
const booksModel = require('../models/books')(sequelize, Sequelize);

exports.save = (req, res) => {
    const bookSetData = {
        title: req.body.title,
        description: req.body.description
    }

    booksModel.create(bookSetData).then(data => {
        console.log('Data saved');
        res.redirect('/');
    }).catch (err => {
        console.log('error' + err)
    })
}


exports.show = (req, res) => {

    booksModel.findAll({
        order: [['title', 'ASC']]
    }).then(results => {
        res.render('show', { results: results })
    }).catch (err => {
        res.status(500).send({message: "Error" + err.message})
    })
}