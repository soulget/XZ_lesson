// 1000s
// sleep(3000)
// console.log('helloworld')


// const sleep = time => {
//   return new Promise((resolve, reject) => setTimeout(resolve, time))
// }
// sleep(3000)
//   .then(() => {
//     console.log('stop do')
//   })

// function *sleepGenerator(time) {
//   yield new Promise((resolve, reject) => {
//     setTimeout(resolve, time);
//   })
//   console.log('sleep')
// }
// sleepGenerator(2000)
//   .next()
//   .value
//   .then(() => {
//     console.log('pink')
//   })

// console.log(sleepGenerator().next())

// function sleep (time) {
//   return new Promise((resolve, reject) => setTimeout(resolve, time))
// }
// async function output() {
//   let out = await sleep(2000);
//   console.log(1);
//   return out
// }
// output();

function sleep (callback, time) {
  if(typeof callback === 'function')
  setTimeout(callback, time);
}
sleep(function () {
  console.log('asd');
}, 2000)