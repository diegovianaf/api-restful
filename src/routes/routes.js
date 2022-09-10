const router = require('express').Router()

router.get('/clients', (req, res) => {
  res.send({
    ok: "It's working"
  })
})

module.exports = router
