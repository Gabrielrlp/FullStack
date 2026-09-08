async function buscar(req,res) {
    try {
       const resultado = await pool.execute("SELECT * FROM dados") 

       console.log(resultado)
    } catch (error) {
        console.error(error)
    }
}

buscar()