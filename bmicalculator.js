function bmiCalculator (weight, height) {
    var heightsq = height * height;
    var calcbmi = Math.round(weight / heightsq);
    
    if (calcbmi<18.5) {
        var interpretation = "Your BMI is " + calcbmi + ", so you are underweight."
    }
    if (calcbmi >= 18.5 && calcbmi <= 24.9) {
        var interpretation = "Your BMI is " + calcbmi + ", so you have a normal weight."
    }
    
    if (calcbmi >= 24.9) {
        var interpretation = "Your BMI is " + calcbmi + ", so you are overweight."
    }

     return interpretation;
}



