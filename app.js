const express = require('express')
const app = express()
const cors = require("cors");
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const router = require('./routes')

const port = 3000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`CASH app listening on port ${port}`)
})