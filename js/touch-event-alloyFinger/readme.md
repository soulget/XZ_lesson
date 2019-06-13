
//rotate(30deg)
let str = 'rotate(30deg)'
str.replace(/[a-zA-Z)(]/g,'')     => 30

str.split(/[\(\)]/)[1]       =>30deg