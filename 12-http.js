const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.end('Hello again Mr Stephen.')
    }
    else if (req.url === '/about'){
        res.end('Want to know more about us?')
    }
    else {
        res.end(
            `
            <h1>  Oops! </h1>
                <p> We couldn't find the page you requested </p>
                    <a href='/'>Home</a>

            `
        )
    }
})

server.listen(5000)




















