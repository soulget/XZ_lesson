## 编码
  计算机世界都是二进制 0 / 1, 需要一个规则 把这些二进制对应到不同字符串。
  utf8 编码需要发送的字符串
  接收方 用 utf8 解码
## 常见的编码
- 16进制 hex
- unicode 编码: &#xe607 计算届字符标准，全世界的语言文字，都有一个对应的 unicode, utf8 就是 unicode 的一种实现。
- base64: 用 64 个字符来 表示一段二进制



## 传输
流
```js
fs.createReadStream().pipe(fs.WriteStream)
```
流的好处：
不用一次性读取所有的内容，中间有个一管道源源不断地传输数据
A (读) --> B (写)
数据不对等，
Buffer 有单独的空间管理 这些数据
缓冲一下传输速度，这个单独区域，就是 Buffer。

## Buffer 基础
```js
{ Buffer:
   { [Function: Buffer]
     poolSize: 8192,  // 8kb
     from: [Function: from], // 创建方式
     of: [Function: of],
     alloc: [Function: alloc],
     allocUnsafe: [Function: allocUnsafe],
     allocUnsafeSlow: [Function: allocUnsafeSlow],
     isBuffer: [Function: isBuffer],
     compare: [Function: compare],
     isEncoding: [Function: isEncoding],
     concat: [Function: concat],
     byteLength: [Function: byteLength],
     [Symbol(kIsEncodingSymbol)]: [Function: isEncoding] },
     SlowBuffer: [Function: SlowBuffer],
     transcode: [Function: transcode],
     INSPECT_MAX_BYTES: 50,
     kMaxLength: 2147483647,
     kStringMaxLength: 1073741799,
     constants: { MAX_LENGTH: 2147483647, MAX_STRING_LENGTH: 1073741799 } }
  ```