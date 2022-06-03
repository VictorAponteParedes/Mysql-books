

const bookGet = (req , res , next)=>{
    req.getConnection((err, connection)=>{
    if (err) return next(err)
    connection.query('SELECT * FROM  books' , (err, rows)=>{
        if (err) return next(err)
        res.json(rows)
    })

    })
}




module.exports = bookGet;