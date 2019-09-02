const bufFromStr = Buffer.from('hello buffer');
// <Buffer 68 65 6c 6c 6f 20 62 75 66 66 65 72>  ASCII 16进制形式
// console.log(bufFromStr);

const alloc = Buffer.alloc(32);
alloc.write('123456789')
// console.log('alloc',alloc.toString());

const fs = require('fs')
fs.readFile('./kk.jpg',(err, data) =>{ 
  console.log(Buffer.isBuffer(data));
  fs.writeFile('./kk.jpg',data,()=> {})
  const anotherBuffer = Buffer.from(data).toString('base64')
  console.log(anotherBuffer)
  const decodeImage = Buffer.from(anotherBuffer,'base64');
  console.log('对比', Buffer.compare(data, decodeImage));
  fs.writeFile('cxk.jpg',decodeImage,()=> {})
})