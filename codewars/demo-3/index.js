const nums = ['c','a','z','y'];

const num2=[1,10,2,28];
console.log(num2.sort(function(a,b){
    return a -b >0;
    // console.log(a,b,'------');
}));


const people = [
    {age:46,name:'roger'},
    {age:99,name:'vinny'},
    {age:26,name:'don'},
    {age:74,name:'brendan'},   
];
var orderpeople = function(people){
    return people.sort((a,b)=>{
        return a.age - b.age > 0
    })
}
console.log(orderpeople(people));