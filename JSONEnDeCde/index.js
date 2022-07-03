const BioData = {
    name: 'nouman',
    age: 21
}

const jsonData = JSON.stringify(BioData);
// console.log(jsonData)
// const ObjData = JSON.parse(jsonData)
// console.log(ObjData)

const fs = require('fs');

// fs.writeFile('Json.json', jsonData, (err) => {
//     console.log(err)
// });
fs.readFile('Json.json','utf-8',(err,Data)=>{
    console.log(Data)
    const objData = JSON.parse(Data)
    console.log(objData)

});