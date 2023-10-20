import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import { config } from 'dotenv';
import router from './router/router.js';

//import connection file
import connect from './database/conn.js';


const app=express()


//app middlewares
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

//apilication port
const port = process.env.PORT || 8080;

connect();
//create route
app.use('/api',router)  //apis

app.get('/',(req,res)=>{
    try{
    res.json("Get Request")
    }
    catch(error){
       res.json(error)
    }
})
//start server only valid connection
connect().then(() =>{
try{
   app.listen(port,()=>{
      console.log(`Server connected to http://localhost:${port}`)
   })
} catch(error){
   console.log("Can not connect to the server");
}
}).catch(error =>{
   console.log("Invalid Database Connection");
})

