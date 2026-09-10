const server = require('./src/app')
const port = 3000

server.listen(port, () => {
    console.log(`Voce esta sendo redirecionado para http://localhost:${port}`)
})