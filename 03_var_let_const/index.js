// after ES6 let and const are introduce 
/*
       var is Globally scope
       let & const are blocked scope
       {
              let x=45;
       }
       //console.log(x) --> cannot access from outside of block scope but it can do with var becuase it is global scope 
       
       var can be redeclare
       ```var a=45;
          var b=45;```

       let and const cannot be redeclare
       


*/

{
       var x=45;
       let b=57;
       const k=57;
}

console.log(x);

console.log("Javscript");

var a=45;
var b="Hello";
var c=null;
var d=undefined;
var e=true;

console.log(a,b,c,d,e);

