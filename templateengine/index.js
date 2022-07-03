import express from "express";

import Web from './routes/web.js'


const Express = express();
const port = process.env.PORT || '3000';
// Setting Templete engine
Express.set('view engine','ejs')


// Loading Route
Express.use('/',Web)




Express.listen(port,()=>{
    console.log('Serever')
})