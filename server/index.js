import Express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'

const app = Express();
dotenv.config();
app.use(Express.json({ limit: "30mb", extended: true }))
app.use(Express.urlencoded({ limit: "30mb", extended: true }))
app.use(Express.static('public'))
app.use(cors());

import userRoutes from './routes/users.js'

app.get('/', (req, res) => {
    res.send("Server Started");
})
app.use('/user',userRoutes)

app.use(bodyParser.json());


const PORT= process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server Running on the http://localhost:${PORT}`)
})

const DB_URL = process.env.CONNECTION_URL
mongoose.connect(DB_URL,{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("MongoDB database connected")
}).catch((error)=>{
    console.log(error)
})