const dotenv = require('dotenv')
dotenv.config()

const Config = require('./src/config/config')
const express = require('express')

const app = express()
const jsonData =

{
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
}



app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/twitter', (req, res) => {
    res.send("twwitter eeee oi")

})


app.get("/github", (req, res) => {
    res.json(jsonData)
})

app.listen(Config.PORT, () => {
    console.log(`Example app listening on port ${Config.PORT}`)
})
