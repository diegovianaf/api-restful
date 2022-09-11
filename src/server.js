const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

db.connect()

const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://127.0.0.1:5501',
]

app.use(cors({
  origin: allowedOrigins
}))

app.use(express.json())

app.use('/api', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))
