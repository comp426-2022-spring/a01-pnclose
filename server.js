// WHY: You need this to make a request over the hyper text transfer protocol (http)
const http = require('http')

// WHY: Helps us store, access, and manage data on our operating system. We use it for readFile
const fs = require('fs')


// WHY: To process one argument `--port=` on the command line after `node server.js`
// WHAT IS argv: Returns an argument object argv populated with the array arguments from args
const argv = require('minimist')(process.argv.slice(2))
console.log(argv);



// Define allowed argument name 'port'.
argv['port']

// WHY: We set the port in argv to be 3000
const port = argv['port'] || 3000
// const port = argv['port'] || process.env.PORT || 3000


// WHY: We read file index.html since that is what we want displayed on the server
// if err then return exit(1)
fs.readFile('./www/index.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return process.exit(1)
    }

    // create the server, and set the 3 things
    // statusCode, header, end
    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
    })

    // listen for output
    server.listen(port, () => {
        console.log(`Server listening on port ${port}`)
    })
})

// That's it! You're all done!