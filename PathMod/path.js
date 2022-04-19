const path = require('path');

// console.log(path.dirname('media/noumanulhaq/New Volume/NodeJs/PathMod/path.js'))
// console.log(path.extname('media/noumanulhaq/New Volume/NodeJs/PathMod/path.js'))
// console.log(path.basename('media/noumanulhaq/New Volume/NodeJs/PathMod/path.js'))

const MyPath = path.parse('media/noumanulhaq/New Volume/NodeJs/PathMod/path.js')
console.log(MyPath.dir)
