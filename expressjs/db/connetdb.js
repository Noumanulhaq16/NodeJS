import mongoose from 'mongoose';
import './models/Student.js'
// const DB_Option = {
//     user: 'nouman',
//     pass: 'pass',
//     dbName: 'schooldb',
//     authSorce: 'schooldb'
// }

const ConnectDB = async (DataBase_Url) => {
    try {
        const DB_Option = {
            dbName: 'schooldb',
        }
        await mongoose.connect(DataBase_Url, DB_Option);
        console.log('Connected');
    } catch (err) {
        console.log(err);
    }
}

export default ConnectDB;