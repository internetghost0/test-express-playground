const http = require("http")
const { readFileSync } = require("fs")

// get all files
const homePage = readFileSync("./index.html")

const server = http.createServer((req, res) => {
    // home page
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(homePage)
        res.end()
    }
    // about page
    else if (req.url === "/about") {
        res.writeHead(200, { "content-type": "text/html" })
        res.write("about :)")
        res.end("<h1>home page</h1>")
    }
    // 404 not found
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("not found")
        res.end()
    }
})

server.listen(5000)
