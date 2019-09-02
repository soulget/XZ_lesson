const Schedule = require('node-schedule');
// const date = new Date(2019,8,16,19,30);
// Schedule.scheduleJob(date, () => {
//   console.log('执行了');
// })
let rule = new Schedule.RecurrenceRule();
rule.dayOfWeek = [0,1,2,3,4,5,6];
rule.hour = 16;
rule.minute = 33;
let j = Schedule.scheduleJob(rule,function() {
  console.log('执行了')
})