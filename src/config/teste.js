const pool = require('./db')

async function buscar(req, res) {
    try {
        const resultado = await pool.execute('SELECT * FROM usuario')

        console.log(resultado)
    } catch (error) {
        console.error(error)
    }
}

buscar();