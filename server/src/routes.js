module.export = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hi There ${req.body.email}! You already registered! Have fun!`
    })
  })
}
