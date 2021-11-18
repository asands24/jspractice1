//initate for loop with counter set to 50
for (let i = 0; i <= 50; i++) {
//if statement that tests number is divisible by 5 and 3
    if (i%15==0) {
        console.log("FizzBuzz");
//else if statement that tests number is divisible by 5
    }else if (i%5==0) {
        console.log("Fizz");
//else if statement that tests number is divisible by 3
    }else if (i%3==0) {
        console.log("Buzz");
//else statement that prints number
    }else { 
        console.log(i);
    }
}