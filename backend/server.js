const express=require('express') ;
const connectDB=require('./config/db')

const app=express() ;

// connect database
connectDB() ;

const PORT=process.env.PORT || 5000

app.get('/',(req,res)=>{
    res.json({msg:'hello'})
})

// Define Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/users',require('./routes/users'))
app.use('/api/contacts',require('./routes/contacts'))

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))
