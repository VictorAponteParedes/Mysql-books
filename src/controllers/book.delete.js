
const bookdelete =  (req , res , next)=>{
    req.getConnection((err, connection)=>{
    if (err) return next(err)
    connection.query('DELETE FROM  books WHERE id = ?', [req.params.id] , (err, rows)=>{
     if (err) return next(err)
       res.send('Book deleted!')
   })

    })
}




module.exports = bookdelete;