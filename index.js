const express = require("express")
const {connection} = require("./db")
const {userRouter} = require("./routes/user.routes") 
const {userModel}  =require("./model/user.model")
const {noteRouter} = require("./routes/Note.routes") 
const {authonticate} = require("./middleware/authenticate.middleware")
const cors=require("cors")
require("dotenv").config()
const app = express()
app.use(express.json())

app.get("/",(req,res) => {
    res.send("Home-Page")

})

app.use("/users",userRouter)
app.use(authonticate)



app.use("/notes",noteRouter)

app.get("/users",async(req,res) => {
    let query = req.query
    console.log(query)
    try{
        const users = await userModel.find(query)
       res.send(users)
  
    }catch(err){ 
        res.send({"msg":"cannot get the User","error":err.message})
      
    }
    
    
})

app.listen(process.env.port, async() => {
    try{
        await connection
        console.log("connected to DB")
    }
    catch(err){
        console.log(err)
        console.log("Can not connected")
       
    }
    console.log(`Port runnig at ${process.env.port}`)
   
})