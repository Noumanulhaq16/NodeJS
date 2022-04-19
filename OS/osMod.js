const os = require('os');

// console.log(os.arch())

// console.log(os.freemem())
const freemems = os.freemem();
console.log(freemems/1024/1024/1024)

const totalmems = os.totalmem();
console.log(totalmems/1024/1024/1024)

console.log(os.hostname())
console.log(os.platform())