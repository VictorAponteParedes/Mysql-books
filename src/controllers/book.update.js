

const bookUpdate = (req , res , next)=>{
    req.getConnection((err, connection)=>{
    if (err) return next(err)
    connection.query('UPDATE books set ? WHERE id = ?', [req.body , req.params.id] , (err, rows)=>{
     if (err) return next(err)
       res.send('Book updated!')
   })

    })
}




module.exports = bookUpdate;