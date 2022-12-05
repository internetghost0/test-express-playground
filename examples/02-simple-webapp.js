// simple webapp w/o frameworks
const http = require("http")
const { readFileSync } = require("fs")

// get all files
const homePage = readFileSync("./navbar-app/index.html")
const homeStyles = readFileSync("./navbar-app/styles.css")
const homeImage = readFileSync("./navbar-app/logo.svg")
const homeLogic = readFileSync("./navbar-app/browser-app.js")

const server = http.createServer((req, res) => {
    // home page
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(homePage)
        res.end()
    }
    // styles.css
    else if (req.url === "/styles.css") {
        res.writeHead(200, { "content-type": "text/css" })
        res.write(homeStyles)
        res.end()
    }
    // image/logo 
    else if (req.url === "/logo.svg") {
        res.writeHead(200, { "content-type": "image/svg+xml" })
        res.write(homeImage)
        res.end()
    }
    // logic
    else if (req.url === "/browser-app.js") {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.write(homeLogic)
        res.end()
    }
    // about page
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write('<h1> about </h1>')
        res.end()
    }
    // 404 not found
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("not found")
        res.end()
    }
})

server.listen(5000)
