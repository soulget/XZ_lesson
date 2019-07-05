// 为了便于后面再  this.code 变化或者组件销毁时移除动态创建的<style>标签
// 我们给每个style 标签都加上一个随机生成的 id  用于标识


// 生成随机字符串
export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxPos = $chars.length
  let str = ''
  for (let i=0; i<len; i++) {
    str += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
}