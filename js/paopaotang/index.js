// 玩家1  玩家2...
// object 类 
// JSON  object 难以完成此job
// 玩家类  es5 没有class 关键字
// 大写首字母的函数    构造函数
// 函数可以用来构建类？
// 一个函数首字母大写约束，区别于普通函数的运行方式 new，构造函数
// 函数是js里的一等对象，js除了基本数据类型之外，都是对象Object，函数是可以被运行的对象
function Player(name){
    // js函数跟其他语言不一样，每个函数内部一定会存在一个this，指针，总会指向点什么   常在 ，答应，
    // this 指向实例化后的对象
     console.log(this);
     this.name=name;
     this.enemy=null;
}
Player.prototype.win=function(){
    console.log(this.name+"win");
}
Player.prototype.lose=function(){
    console.log(this.name+"lose");
}
// Player();
// 将类实例化 类抽象的概念  对象可以new出来
// 孕育爱情 
//上线
var Player1=new Player("皮蛋");
console.log(Player1.name+"上线了");
var Player2=new Player("小怪");
console.log(Player2.name+"上线了");
// 成为队手的过程 来一把
Player1.enemy=Player2;
Player2.enemy=Player1;
// 游戏的过程
Player1.win();
Player2.lose();
// console.log(Player1.name);

// console.log(Player2.name);