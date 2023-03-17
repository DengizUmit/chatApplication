const sql = require('mssql');

const config = {
    user: 'userName',
    password: 'password',
    server: 'serverName',
    database: 'chatAppDB'
}

sql.connect(config, (err) => {
    if (err) 
        console.log(err)
    else 
        console.log('MSSQL database connected')
})


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hallo node response')
// })

// app.listen(port, () => {
//     console.log('The server is running at http://localhost:${port}')
// })