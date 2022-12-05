// req => middleware => res
const express = require("express")
const app = express()

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


//////
//// if u want to add middleware to SOME routes
// app.get("/", logger, (req, res) => {
//     res.send("Home")
// })
//////

////
// if u want to add middleware to ALL routes BELOW the `app.use(logger)`
app.use('/api', logger)

// if u want to add middleware to the routes that starts with specific url
// for example `app.use('/api', logger)` 
// `logger` would be applied for routes '/api/', '/api/items', '/api/products' and etc.
//

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/about", (req, res) => {
    res.send("About")
})

app.get("/api/products", (req, res) => {
    res.send("Products")
})

app.get("/api/items", (req, res) => {
    res.send("Items")
})

app.listen(5000, () => {
    console.log("Server is starting on port 5000...")
})
