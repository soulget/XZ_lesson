// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'xz-1q6dr'

cloud.init()
//获取服务器句柄
const db = cloud.database({env})

// 云函数入口函数
exports.main = async (event, context) => {
 const wxContext = await db.collection('user-group').where({
   userId:cloud.getWXContext().OPENID
 })
 .get()

 const storeUser = await db.collection('user').where({
   openId:cloud.getWXContext().OPENID
 })
 .get()
 return {
   groupNum:groupNum.data.length,
   storeUser:storeUser.data[0]
 }
}
