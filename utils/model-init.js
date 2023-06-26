const sequelize = require('../utils/db-util')

require('../models/product')


module.exports = sequelize.sync()