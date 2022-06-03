
const bookPost = (req , res , next)=>{
    req.getConnection((err, connection)=>{
    if (err) return next(err)
    console.log(req.body)
    connection.query('INSERT INTO books set ?', [req.body] , (err, rows)=>{
     if (err) return next(err)
       res.send('Book inserted!')
   })

    })
}




module.exports = bookPost;