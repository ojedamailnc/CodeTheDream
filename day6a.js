

function checkLeap(year) {

//if ( year % 4 == 0 &&  year % 100 !== 0 || year % 400 == 0) {
if (( year % 4) && !( year % 100) || (year % 400 == 0)) {
        console.log(year + " is a leap year");
} else {
        console.log(year + " is not a leap Year");
    }
}
checkLeap(1997);
// if (checkLeap(2000)) {
//     console.log("Leap Year");
// }  else {
//     console.log("Not a Leap Year");
// }