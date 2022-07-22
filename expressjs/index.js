import express from 'express'
import ConnectDB from './db/connetdb.js';
import * as dotenv from 'dotenv'
const app = express();
dotenv.config();
// const port = process.env.PORT;
// const DataBase_Url = process.env.DATABASE_URL;
// console.log(process.env.DATABASE_URL)

ConnectDB(process.env.DATABASE_URL);



app.listen(process.env.PORT, () => {
    console.log(`Serve On ${process.env.PORT}`)
})