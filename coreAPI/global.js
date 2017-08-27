var path = require('path');
console.log('__dirname:',__dirname)
console.log('__filename',__filename)
var person = require('./module');
console.log(person)
// console.log(require.cache)

// 该方法使用require()的内部机制来查找模块的位置，但不会加载该模块，只返回解析后的文件名。
console.log(require.resolve('./module'))

// 返回文件名(或带扩展名)
console.log(path.basename('http://javascript.ruanyifeng.com/nodejs/path.html'))
console.log(path.basename('http://javascript.ruanyifeng.com/nodejs/path.html', '.html'))

// 返回文件扩展名
console.log(path.extname('http://javascript.ruanyifeng.com/nodejs/path.html'))