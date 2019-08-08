// {{name}}  {{age}}

function render(tpl, data) {
  // 1.找到所有的{{}} regExp   /{\{\(.+)\}\}//g
  return tpl.replace(/\{\{(.+?)\}\}/g, function($1, $2) {
    console.log($1, $2);
    return data[$2];
  })
}
let tmpl = `
  <div>
    <p>{{name}}</P>
    <p>{{age}}</P>
  <div>
`
console.log(render(tmpl, {name: '李纬', age: 18}));