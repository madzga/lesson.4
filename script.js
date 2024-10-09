"use strict"

//1
let  Array =['banana','mango','potao','tomato'];

Array.splice(-2,1, 'strawberry');
console.log(Array);

//2
let info= 'good day'

let slice=info.slice(5)
console.log(slice);

//3
function fnc1(strings) {
    return strings.length;
}
let arr=fnc1('kakao')
console.log(arr);

//4
let newarr=[ 5, 25, 89, 120, 36]

newarr.pop()

newarr.push('javascript','phthon')

newarr.shift()

newarr.unshift('html','css')

console.log(newarr.length);

//5
let fruits=['oragne','kiwi','banana']

console.log(fruits.length);

fruits.push('apple','pinapple')

fruits.unshift('watermelone')

console.log(fruits.length);

fruits.splice(2,0,'mango')

fruits.pop()

fruits.shift()

console.log(fruits.length);

//6
let array3 =[1, 2, 3, 4, 5]

array3.splice(3,0,'a','b','c')

console.log(array3);

//7
let array7 =  [15, 100, 25, 10, 36]

array7.splice(3,1)

console.log(array7);

//8
let array8 = [ 1, 2 , 3 , 4, 5] 

array8.splice(2,1,"three")

console.log(array8);

//9
let array2 = [14, 150, 'css', null, 'javascript', 25];

let resultarr=array2.map(function(numbers) {
    
})


//10
let array10 = [12, 25, 3, 6, 8, 14, 7, 23];

let array10New = array10.map(function (items) {
  return items / 3;
});

