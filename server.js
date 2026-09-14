const server = require('../projeto.0/src/app')
const port = 3000

server.listen(port, () => {
    console.log(`Voce sera redirecionado para http://localhost:${port}`)
})