const { application } = require("express")
const express = require("express")
const app = express()
const people = require('./routes/people')

// static assets
app.use(express.static("./methods-public"))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)

app.post("/login", (req, res) => {
    console.log(req.body.name)
    const { name } = req.body
    let auth = false
    people.forEach((element) => {
        if (element.name === name) {
            auth = true
            res.status(200).send(`<h1><a href='/'>Welcome</a> ${name}</h1>`)
        }
    })
    if (!auth) {
        res.status(403).send("<h1><a href='/'>Forbidden</a></h1>")
    }
})

app.listen(5000, () => {
    console.log("Server is running on port 5000...")
})
