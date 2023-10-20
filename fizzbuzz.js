var output = [];
var x = 1;

function fizzBuzz (n) {


    for (var i = 1; i <= n; i++) {

    if ((x%3 == 0) && (x%5 != 0)){
        output.push("Fizz")
        } else if ((x%5 == 0) && (x%3 != 0)) { 
            output.push("Buzz")
            } else if (x%3 == 0 && x%5 == 0) {
                output.push("FizzBuzz")
                } else {output.push(x)}
     x++;
    }

    console.log(output);
}



