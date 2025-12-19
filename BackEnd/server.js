import express from "express";
import cors from 'cors'
import routes from "./routes/routes.js";

const PORT = 8000
const app = express()
app.use(express.json())
app.use(cors({
   origin: true, 
   credentials: true 
}))
app.use('/api',routes)

app.listen(PORT,()=>{
   console.log("SERVER IS RUNNING!");
})