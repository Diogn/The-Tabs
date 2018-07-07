const {User} = require('../models')

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(404).send({
        error: 'This email already been use.'
      })
    }
  },
  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(405).send({
          error: 'The login information was incorrect'
        })
      }

      const isPasswordValid = password === user.password
      if (!isPasswordValid) {
        return res.status(405).send({
          error: 'The password was incorrect'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson
      })
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured when trying to log in'
      })
    }
  }
}
