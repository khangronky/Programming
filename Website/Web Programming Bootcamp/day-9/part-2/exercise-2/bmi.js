function bmiCalculator(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));
    return bmi;
}

let weight = prompt("Enter your weight in kg: ");
let height = prompt("Enter your height in meters: ");

let bmi = bmiCalculator(weight, height);
if (bmi < 18.5) {
    console.log(`Your BMI is ${bmi}, so you are underweight.`);
}
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(`Your BMI is ${bmi}, so you have a normal weight.`);
}
else {
    console.log(`Your BMI is ${bmi}, so you are overweight.`);
}

