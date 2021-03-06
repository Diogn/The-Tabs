const path = require('path')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'thetabs',
    user: process.env.DB_USER || 'thetabs',
    password: process.env.DB_PASS || 'thetabs',
    options: {
      operatorsAliases: Op,
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: path.resolve(__dirname, '../../thetabs.sqlite')
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
