const sequelize = require('../models/index').sequelize;
const Sequelize = require('../models/index').Sequelize;

const user = sequelize.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

user.sync().then(()=>{
    console.log("*** user table created ***");
});

module.exports = user;
