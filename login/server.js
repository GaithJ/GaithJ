const express=require("express")
const app=express()
const db=require('./models')
const userRoutes=require('./routers/user-routes')
const profilRoutes=require('./routers/profil-routes')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/',userRoutes)
app.use('/',profilRoutes)
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200/login')
    res.setHeader('Access-Control-Request-Methods','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    next()
})




db.sequelize.sync().then(()=>{
    app.listen(3000,()=>console.log("server listening in port 3000"))
})
