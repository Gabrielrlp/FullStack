const server = require('./src/app')
const port = 3000

server.listen(port, () => {
    console.log(`servidor esta rodando em http://localhost:${port}`)
})