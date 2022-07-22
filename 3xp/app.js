import express from 'express';
import student from './routes/student.js'
const app = express();
const port = process.env.PORT || 3000;

//Route Parameters
// app.get('/student/delete/:id', (req, res) => {
//     res.send('delete student' + req.params.id);
// })

// app.get('/student/:category/:id', (req, res) => {
//     const { category, id } = req.params;
//     res.send('Catagory: ' + category + ' id: ' + id);
// })
// //with Regex
// app.get('/student/:id([0-9]{2})', (req, res) => {
//     res.send(req.params.id);
// })
// app.all('*', (req, res) => {
//     res.send('404');
// })

// const FirstCallBack = (req, res, next) => {
//     console.log('FirstCallBack');
//     next()
// }

// const SecondCallBack = (req, res, next) => {
//     console.log('SecondCallBack');
//     next()
// }

// const ThridCallBack = (req, res,next) => {
//     console.log('ThridCallBack');
//     next()
// }

// app.get('/CallBack', [FirstCallBack, SecondCallBack, ThridCallBack],
// (req, res, next) => {
//     console.log('Forth Callback')
//     next()
// },(req,res)=>{
//     console.log('Fifth CallBack')
//     res.send('Bro Im Working')
// });

// Chain Routing
// app.route('/student')
// .get((req, res) => {
//     res.send('get student');
// })
// .post((req, res) => {
//     res.send('post student');
// })
// .put((req, res) => {
//     res.send('put student');
// })

// app.route('/student')
// .all((req, res, next) => {
//     console.log('All');
//     next()
// })
// .get((req, res) => {
//     res.send('get student');
// })
// .post((req, res) => {
//     res.send('post student');
// })
// .put((req, res) => {
//     res.send('put student');
// })

app.use('/student',student)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})