var x=1;
while (x <=20) {
    //console.log(x);
    if (x % 3 == 0 && x % 5 == 0) {
        console.log ("jamesjulia", x);
    } else if (x % 3 == 0) {
        console.log("julia " + x);
    } else if (x % 5 == 0){
        console.log("james " + x);
    } else {
       console.log(x);
    }  
    x++;
}