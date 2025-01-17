const express=require ("express");
const connectDB = require("./config/dbConnection");
const { errorHandler } = require("./controllers/ErroHandler/errorHandler");
const dotenv=require("dotenv").config();
const app=express();


const port= process.env.PORT|| 5000
connectDB()
app.use(express.json())
app.use(errorHandler)

app.use('/api/contacts',require('./routes/contactRoutes'))

app.listen(port,()=>{
    console.log(`server is running ${port}`);
})