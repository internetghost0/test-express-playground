// playing with http-headers:w
const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "content-type": "text/html" })
        res.end("<h1>home page</h1>")
    } else if (req.url === '/plain') {
        res.writeHead(200, { "content-type": "text/plain" })
        res.end("<h1>home page</h1>")
    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("not found")
        res.end()
    }
})

server.listen(5000)
