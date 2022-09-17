# api-restful
Learning API RESTful

## API-Restful

`npm init -y`

`npm i express mongoose`

`npm i —save-dev nodemon`

```json
"dev": "nodemon src/server.js",
```

- postman API
    - create new collection
    - rename to Products
        - GET http://localhost:8080/api/products
        - POST http://localhost:8080/api/products
        - PUT http://localhost:8080/api/products/ID
        - DELETE http://localhost:8080/api/products/ID

`npm i cors`

```jsx
const cors = require('cors')

// any application can have access to the api
app.use(cors())

// only one application can have access to the api
app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))

```

[diegovianaf/api-restful-front](https://github.com/diegovianaf/api-restful-front)
