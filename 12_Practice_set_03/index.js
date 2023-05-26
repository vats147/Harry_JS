let marks={
       harry:90,
       shubham:3,
       monika:4

}

// for(a in marks)
//        console.log(a)


for(let i=0;i<Object.keys(marks).length;i++)
{
       console.log("The marks of "+Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}


// if user not correct number then contiunsoly enter number
let num=4;
do
{
       console.log(4);
       num=0;
}while(num!=0)


const mean =(a,b,c,d)=>{
       return (a+b+c+d)/4;
}

console.log(mean(4,5,6,7));