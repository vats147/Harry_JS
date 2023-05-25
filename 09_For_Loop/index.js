// Loop in js
/*
syntax of for loop
       for(initialization;condition;increment/decrement)
       {
              //Loop Body
       } 

*/

for(let i=0;i<=34;i++)
{
       // console.log(i);
}

//for in loop

let obj={
       harry:90,
       shubh:23,
       Vatsal:24,
       shiv:54
}

for(let a in obj)
{
       console.log("Marks of "+ a+ " are "+ obj[a]);
}

//for of loop
let arr=["c","c++","Java"];
for(let b of arr)
{
       console.log(b);
}
