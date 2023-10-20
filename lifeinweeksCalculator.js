function lifeInWeeks(age) {
    
    
    var days = (32850 - (age * 365))
    var weeks = (4680 - (age * 52))
    var months = (1080 - (age *12))
    
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
    
}

