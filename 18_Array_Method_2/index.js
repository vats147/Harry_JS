let num=[1,2,3,4,5,07];
// delete num[3];
console.log(num.length);

// concat combine more than one array

 let newnum=[12,12,70,45];
 let newarr=num.concat(newnum,num);
//  console.log(newarr);

let compare=(a,b) =>{
       return a-b
}

 let arsort=newarr.sort(compare);
 console.log(newarr);

 arsort.reverse();

console.log(arsort);

// Splice and Slice
const mynum=[1,2,3,4,2,5]
// mynum.splice(2,1,100,200,300);
console.log(mynum);

 newnum=mynum.slice(3,6)
 console.log(newnum);


