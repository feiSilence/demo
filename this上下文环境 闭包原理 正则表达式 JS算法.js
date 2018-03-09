/*严格模式显式地引用全局作用域*/
(function() {
   'use strict';
   var a = window.b = 5;
})();
 
console.log(b);


/*创建 “原生(native)” 方法，扩展一个Javascript方法*/
String.prototype.repeatify = String.prototype.repeatify || function(times) {
   var str = '';
 
   for (var i = 0; i < times; i++) {
      str += this;
   }
 
   return str;
};


/*变量提升，变量和函数都被提升(hoisted) 到了函数体的顶部*/
function test() {
   var a;
   function foo() {
      return 2;
   }
 
   console.log(a);
   console.log(foo());
   
   a = 1;
}
 
test();


/*这段代码打印结果是：Aurelio De Rosa 和 John Doe 。原因是，JavaScript中关键字this所引用的是函数上下文，取决于函数是如何调用的，而不是怎么被定义的。*/
var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};
 
console.log(obj.prop.getFullname());/*obj对象属性*/
 
var test = obj.prop.getFullname;
 
console.log(test());/*当前的上下文是全局对象window*/

console.log(test.call(obj.prop));/*通过运用call()或者apply()方法强制转换上下文环境*/




/*i在代码添加处理程序的作用域中，该变量属于处理程序的闭包。你会记得，闭包中的变量的值不是静态的，因此i的值不是添加处理程序时的值*/
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function() {
      console.log('You clicked element #' + i);
   });
}

/*第一个解决方案使用立即执行函数表达式（IIFE）再创建一个闭包*/
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', (function(i) {
      return function() {
         console.log('You clicked element #' + i);
      }
   })(i));
}

/*另一个解决方案不使用IIFE，而是将函数移到循环的外面*/
function handlerWrapper(i) {
   return function() {
      console.log('You clicked element #' + i);
   }
}
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', handlerWrapper(i));
}



/*数据类型*/
console.log(typeof null);//object
console.log(typeof {});//object
console.log(typeof []);//object
console.log(typeof undefined);//undefined

/*测试一个变量是否为数组*/
var myArray = [];
if (myArray instanceof Array) {
   // do something...
}



/*算法:写一个isPrime()函数，当其为质数时返回true，否则返回false*/
function isPrime(number) {
   // If your browser doesn't support the method Number.isInteger of ECMAScript 6,
   // you can implement your own pretty easily
   if (typeof number !== 'number' || !Number.isInteger(number)) {
      // Alternatively you can throw an error.
      return false;
   }
   if (number < 2) {
      return false;
   }
 
   if (number === 2) {
      return true;
   } else if (number % 2 === 0) {
      return false;
   }
   var squareRoot = Math.sqrt(number);
   for(var i = 3; i <= squareRoot; i += 2) {
      if (number % i === 0) {
         return false;
      }
   }
   return true;
}


// test() 方法检索字符串中是否存在指定的值。返回值是 true 或 false。
// JavaScript 代码:
var patt1 = new RegExp('e');
console.log(patt1.test('some text'));
// OUTPUT:true
var patt2 = new RegExp('ee');
console.log(patt2.test('some text'));
// OUTPUT:false
 
// 判断是不是QQ号
// 1 首位不能是0  ^[1-9]
// 2 必须是 [5, 11] 位的数字 \d{4, 9}
var str = '80583600';
var regexp = /^[1-9][0-9]{4,10}$/gim;
if (regexp.test(str)) {
    alert('is');
} else {
    alert('no');
}

// match 找到一个或多个正则表达式的匹配。
// JavaScript 代码:
var str="1 plus 2 equal 3"
console.log(str.match(/\d+/g))
// OUTPUT:1,2,3


// replace 替换与正则表达式匹配的子串。
// JavaScript 代码:
var str = "Visit Microsoft!"
console.log(str.replace(/Microsoft/, "W3School"));
// OUTPUT:Visit W3School!
// JavaScript 代码:
// 找重复项最多的字符个数
var str = 'g21ss4aeba_ersb43sgnnsssstht6sss60snnsj8resw0_ss';
// split : 将字符串转化为数组
// sort : 对数组排序，ASCII
// join : 将数组转化为字符串
var str_new = str.split('').sort().join('');
document.write(str + ''); 
document.write(str.split('') + ''); 
document.write(str.split('').sort() + ''); 
document.write(str.split('').sort().join('') + ''); 
// 匹配字符，且重复这个字符，重复次数至少一次。
var regexp = /(\w)\1+/g;
var index = 0;
var value = '';
str_new.replace(regexp, function($0, $1) {
    // document.write($0);
    // document.write($1);
    if (index < $0.length) {
        index = $0.length;
        value = $1;
    }
});
document.write('重复项最多的字符是：' + value + '，个数是：' + index);
// OUTPUT:
// 0012344668__aabbeeegghjnnnnrrssssssssssssssssttw
// 重复项最多的字符是：s，个数是：16
split 把字符串分割为字符串数组。
JavaScript 代码:
var str = "How are you doing today?"
document.write(str.split(/\s+/));
// OUTPUT:How,are,you,doing,today?



$(function (){
  // 切换搜索框
  (function (){
    var aLi = $('#menu li');
    var oText = $('#search').find('.form .text');
    var arrText = [
      '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
      '例如：昌平区育新站龙旗广场2号楼609室',
      '例如：万达影院双人情侣券',
      '例如：东莞出事了，大老虎是谁？',
      '例如：北京初春降雪，天气变幻莫测'
    ];
    var iNow = 0;
    
    oText.val(arrText[iNow]);
    
    aLi.each(function ( index ){
      $(this).click(function (){
        aLi.attr('class', 'gradient');
        $(this).attr('class', 'active');
        
        iNow = index;
        
        oText.val(arrText[iNow]);
      });
    });
    
    oText.focus(function (){
      if( $(this).val() == arrText[iNow] ) {
        $(this).val('');
      }
    });
    oText.blur(function (){
      if( $(this).val() == '' ) {
        oText.val(arrText[iNow]);
      }
    });
  })();
};