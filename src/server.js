const express = require('express')
const app = express()
const mysql = require('mysql2')
const myconn = require('express-myconnection')
const routeIndex = require('./routes/routes')


//Setings
app.set('port' , process.env.PORT || 9000)



const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456789',
    database: "library"
}

//Middleware
app.use(myconn(mysql , dbOptions , 'single'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//Routes
app.get('/', (req , res)=>{
    res.send('Welcome to my page')
})

 app.use('/api' , routeIndex )

//Listening my Server
app.listen(app.get('port'), ()=>{
    console.log('Server running on port:' ,app.get('port'),)
})

module.exports = app;