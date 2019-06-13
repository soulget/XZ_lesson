// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = 'xz-1q6dr'
const db = cloud.datavase({ env })

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const openId = cloud.getWXContext.OPENID
  let groupList = await db.collection('user-group').where({
    userId:openId
  })
  .get()
    let returnResult = []
    for(let item of groupList.data){
      const oneGruop = await db.collection('group').where({
        _id:item.groupId,
        deleted:false,
      })
      .get()
      if(oneGroup.data.length > 0){
        const userInfo = await db.collection('user').where({
          openId:oneGroup.data[0].createBy
        })
        .get()
        oneGroup.data[0].createBy = userInfo.data[0]
        oneGroup.data[0].relateUserGroupId = item._id
        returnResult.push(oneGruop.data[0])
      }
    }
  return returnResult.sort((a,b)=>a.createTime < b.createTime ? 1:-1)
}