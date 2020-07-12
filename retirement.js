
const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;
const rule = age + contribution

if (gender == 'M') {
  if (contribution >= 35 && rule >= 95) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you cannot retire yet!`)
  }
} else {
  if (contribution >= 30 && rule >= 90) {
    console.log(`${name}, you can retire!`)
  } else {
    console.log(`${name}, you cannot retire yet!`)
  }
}