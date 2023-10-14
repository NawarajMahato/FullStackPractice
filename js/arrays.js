const x = [1,2,-3];

console.log(x.length);

x.push(5);

console.log(x.length);

console.log(x[2]);

x.forEach(value => {    //print only values 1 2 -3 5
 console.log(value);   
});

x.forEach(value => {    //print x = [1,2,-3, 5], x = [1,2,-3, 5], x = [1,2,-3, 5], x = [1,2,-3, 5]
    console.log(x)          // four times x got printed
})


let y= [5,6,7]
console.log(y)

y=[8,9,0]
console.log(y);

var z=[3,4,5]
console.log(z);
var z=[0,0,0];
console.log(z);
z=[1,1,1];
console.log(z);


//concat()create new array

let a=[1,2,3];
console.log(a);
a=a.concat(5);
console.log(a);     //added 5 in same array "a"
let a1=a.concat(4);  //new array created
console.log(a1);


//map

let b =[4,5,6];
console.log(b);

let b1=b.map(value => value * 2)    //4*2 5*2 6*2
console.log(b1);                    // 8 10 12

b1.map(value=>{console.log(value/2);});  // 4 5 6       b1.forEach(value => {console.log(x)}) line 15


let b2= b.map(value=>'<li> '+value+' <li>')
console.log(b2);                //<li> 4 <li> <li> 5 <li> <li> 6 <li>

b1.forEach(value=>{console.log('<li> '+value+' <li>')})  // same as line 56 but printed vertically

//last one

const t=[1,2,3,4,5,6]
const [first,second,...rest] = t;
console.log(first,second);
console.log(rest);