const fs = require('fs');

// // Async Version
// fs.writeFile('read.text', 'Tech Haq', (err) => { 
//     console.log(err)
//  })


fs.appendFile('read.text', 'Task completed', (err) => { 
    console.log(err)
 })
