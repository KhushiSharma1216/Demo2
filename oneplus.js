var a=2;
console.log(a-1);
var b=10;
console.log(b+12);
var c=12;
var d=11;
console.log(c==d);
var e=11;
var f=12;
console.log(e^f);
console.log(e>>f);
var z=15;
var y=15;
if(z!=y)
{
    console.log("true");
}
else
{
    console.log("false")
}
let all =["ankit",19,2233223];
console.log(all[0]);
console.log(all[1]);
console.log(all[2]);


var n="Hello how are you";
for( let i=0;i<n.length;i++)
{
console.log(n[i]);
}

const Money = 4000;
switch(Money) {
    case 5000:
        console.log("Hotel");
          break;
     case 3000:
        console.log("Resturent");
        case 2000:
            console.log("Home");
            break;
    default:
        console.log("nm");
        break;
}
let str ="apple,Banana,Kiwi";
let part = str.substring(7,13);
console.log(part);

let text= "Ram is a good boy,he has good habit";
let newtext =text.replace("good","bad");
console.log(newtext);

let xst="Ram is a good boy, he has good habit";
let newxst = text.replaceAll("good","bad");
console.log(newxst);
 
let text1=" Hello World";
let text2= text1.toUpperCase();
console.log(text2);

let text3 ="Hello World";
let text4=text3.toLowerCase();
console.log(text4);

var xz=["banana","apple","kiwi"];
  xz.pop();
 console.log(xz);

var xz=["banana","apple","kiwi"];
xz.push("orange");
console.log(xz);

var xz=["banana","apple","kiwi"];
xz.shift();
console.log(xz);

var xz=["banana","apple","kiwi"];
xz.unshift("lemon");
console.log(xz);

var xz=["banana","apple","kiwi"];
xz.splice=(2,0,"lemon","kiwi");
console.log(xz);

var x="Apple,Banana,kiwi";
console.log(x.substring(7,9));

var xz="5";
var ss=xz.padStart(2,"k");
console.log(ss);

var xz="   HelloWorld    ";
var ss= xz.trim();
console.log(ss);

const qw={
    name:"khushi",
    age : "20"
}
var m=["Hello"];
var n=["World"];
var af= m.concat(n);

var x =1;
var y =0;
var z=3;

// var a;
// var a =prompt("enter number"); 
// if (a%2==0)
// {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// var q=4;
// var q=prompt("check number");
// if(q%2==0)
// {
//     console.log("even");
// }
// else{
//     console.log("odd");
// }

// slice 
var a ="apple,Banana,orange";
var b =a.slice(7,13);
console.log(b);
// substring
// var a ="apple,banana,kiwi";
// var b= a.string(7,13);
// console.log(b);

// substr
var a="apple,banana,kiwi";
var b= a.substr(7,6);
console.log(b);

// replace
var a= "ram is a good boy,his habby are good";
var b=a.replace("good","bad");
console.log(b);

// replaceAll
var a="ram is a good boy,his habby are good";
var b= a.replaceAll("good","bad");
console.log(b);

// touppercase
var a="hello world";
var b= a.toUpperCase(a);
console.log(b);

// to lowercase
var a="HELLO WORLD";
var b= a.toLowerCase(a);
console.log(b);

// concat
// var a="HELLO";
// var b= "WORLD";
// var c=a.concat("",b);
// console.log(c);

// trim
var a = "   helloo    ";
var b= a.trim();
console.log(b);

// trimEnd
var a= "        hello    ";
var b= a.trimEnd();
console.log(b);

//  ## //  padStart 
var a="5";
var b=a.padStart(4,"khushi");
console.log(b);

// Airthmatic operater
var a= 34+22;
console.log(a)

var a = 23-12;
console.log(a);

var a=2*3;
console.log(a);
var a=2**4;
console.log(a);

var a=12/3;
console.log(a);

// Var a=12%2;
// console.log(a);

console.log (sky(2,5));

function sky(and,the){
    return (and+the);
}

// console.log(c(1,4));

c =(ankit,khushi)=>{ 
    return ankit+khushi
}
console.log(c(10,20));

w = function(ankit,khushi){
    return ankit + khushi
}
console.log(w(12,12));

// return

console.log(add(2,4));

function add(a,b){
    return a+b;
}
// convert

// function w(c){
//     return c*60;
// }
// console.log(w(10));
function sec(c){
    return c*60;
}
console.log(sec(1));


 
eat=(q)=>{
    q++
    return q
}
console.log(eat(10));

function area(you,king){
 return you * king/2
}
console.log(area(20,10));

// convert age to day

function are(p,y){
    return p*y;
}
console.log(are(20,365));



function array(){
var arr=[1,2,3,4,5];
var first=arr[0];
return first;
}
console.log( array());

function hour(w,r){
    return w*r;
}
console.log(hour(60,60))

// edge
function edge(e,r){
    return e+r-1;
}
console.log(edge(20,10));

function return1(q,f){
    return q/f;
}

console.log(return1(20,2));

//  peramiter of rectangle
function rectangle(p,y){
    return 2*(p+y);
}
console.log(rectangle(20,10));
  
// less than 100
function less(a,b){
    if(a + b < 100){
        return true;
    }
    else{
        return false;
    }
}
console.log(less(11,44));

function pow(q,r){
    return q**r;
}
console.log(pow(4,2));

var q=[1,3,5,7,9];

z=q.map((o)=>{
    return o*2;
})
console.log(z);

