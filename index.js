const dotenv = require('dotenv')
dotenv.config()

const Config = require('./src/config/config')
const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
    res.send("twwitter eeee oi")

})


app.listen(Config.PORT, () => {
    console.log(`Example app listening on port ${Config.PORT}`)
})
