## 请求头
一次http 事物 有啥:


- 请求
   请求头 请求体
   content-type : 规定我们向服务端发送请求体的格式
   1. application/x-www-form-uurlencoded
   form 表单 默认的 发送请求的方式
    name=xz&age=20
    <!-- xml -->
   2. application/json
   以 JSON 的格式 发送
   {
       "name": "xz",
       "age": 20
   }


- 响应头  空行  响应体
    content-type

 
 
 通用首部 : 请求/响应