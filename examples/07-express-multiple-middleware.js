// req => middleware1, middleware2 => res
const express = require("express")
const app = express()

/////////////
//// middleware-functions should be separated, but for debug/test/example I placed it in one file
//// filename: logger.js
// const logger = require('./logger.js')
const logger = (req, res, next) => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    next()
}
//module.exports = logger

//// filename: autorize.js
// const logger = require('./logger.js')
const autorize = (req, res, next) => {
    const { user } = req.query
    if (user === "john") {
        req.user = { name: "john", id: 3 }
        next()
    } else {
        res.status(401).send("Unautorized")
    }
}
//module.exports = autorize
/////////////

app.use([logger, autorize])
// app.user(express.static('./public'))

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send(`"${req.user.name}" trying to get PRODUCTS`)
})

app.get("/api/items", (req, res) => {
    res.send(`"${req.user.name}" trying to get ITEMS`)
})

app.listen(5000, () => {
    console.log("Server is starting on port 5000...")
})
