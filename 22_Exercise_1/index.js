// Create a program which genrate random number and take input from the user if number is less than genrated number then tell user number is less than and do the same for greater than and then at the end print how much attempt user neeed

let num=Math.random() *100;
let usernum;
let attempt=0;
do{
       usernum=prompt("Enter Number");
       usernum=Number.parseInt(usernum);
       if(usernum==num)
       {
              console.log("Yaah!! You got this with ",attempt);
       }
       else if(usernum>num)
       {
              console.log("Your number is greater than genrated numbers");
              attempt++;
       }
       elseif(usernum<num)
       {
              console.log("Your number is less than genrated numbers");
              attempt++;
       }
}while(usernum!=num);