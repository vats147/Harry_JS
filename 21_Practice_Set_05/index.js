let num=[10,23,23,430]
let x=num.filter((value)=>{
       return value%10;
})
console.log(x);

let y=num.map((value)=>{
       return value*value;
})
console.log(y);

let fact=[1,2,3,4,5]
let z=fact.reduce((x1,x2)=>{
       return x1*x2;
})
console.log(z);

