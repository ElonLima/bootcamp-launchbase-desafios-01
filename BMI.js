
const name = "Carlos";
const mass = 84;
const height = 1.88;
const bmi = mass / (height * height);

if (bmi >= 30) {
    console.log(`${name}, you are overweight.`)
} else {
    console.log(`${name}, you are not overweight.`)
}
