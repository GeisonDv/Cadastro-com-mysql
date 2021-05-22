const express = require('express');
const app = express();

const appRoutes = require('./routes/approutes')

const { sequelize, Sequelize } = require('./config/database');
const booksModel = require('./models/books')(sequelize, Sequelize);

const handlebars = require('express-handlebars');
const handlebars_mod = require('handlebars')

const { allowInsecurePrototypeAccess } = require("@handlebars/allow-prototype-access");

// const bodyparser = require('body-parser');


app.engine('handlebars', handlebars({ defaultLayout: false,
    handlebars: allowInsecurePrototypeAccess(handlebars_mod)
}));
app.set('view engine', 'handlebars')


app.use(express.urlencoded({ extended: false}));
app.use(express.json());




app.use(appRoutes);

app.listen(8081, function() {
    console.log("Servidor ativo na porta 8081")
})