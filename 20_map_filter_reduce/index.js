let arr =[34,54,32]
let a=arr.map((value,index,array)=>{
       console.log(value,index,array);
       return value+index;
});


console.log(a)

// array filter methos

let arr2=[23,54,65,0,3,5]
let x=arr2.filter((value)=>{
       return value<10
})

console.log(x);

let arr3=[1,2,3,5,2,1];
const reduce_func=(h1,h2)=>{
       return h1+h2;
}
let y=arr3.reduce(reduce_func);
console.log(y);