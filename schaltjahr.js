function leapYear(year) {

    if (year % 4 != 0) {
        console.log("Not leap year.") 
    }
    if ((year % 4 == 0) && (year % 100 != 0)){
        console.log("Leap year.")
    }
    if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 == 0)) {
        console.log("Leap year.")
    }
    if ((year % 4 == 0) && (year % 100 == 0) && (year % 400 != 0)) {
        console.log("Not leap year.")
    }
}
leapYear(1948);
leapYear(1998);
leapYear(2020);
