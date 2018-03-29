var x=1;
while (x <= 100) {
    //console.log(x);
    if (x % 3 == 0 && x % 5 == 0) {
        console.log ("FizzBuzz", x);
    } else if (x % 3 == 0) {
        console.log("Fizz " + x);
    } else if (x % 5 == 0){
        console.log("Buzz " + x);
    } else {
       console.log(x);
    }  
    x++;
}