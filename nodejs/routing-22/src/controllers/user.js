const UserData = require('../models/user')

module.exports = {
  GET: (req, res) => {
    res.send(UserData)
  }
}