var factorial = function fac(num){
    let sum = 1;
    // if(num<=1){
    // return 1;
    // }else{
    // 闭包
    // return num*fac(num-1);
     for(let i=0;i<num;i++){
     sum=sum+sum * num;
    
     } return sum;
    }
    // }
    var result = factorial(1);
    console.log("这是最后下面的阶乘：",result);
  