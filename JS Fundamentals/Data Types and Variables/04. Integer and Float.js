function IntegerandFloat(firstNum, secondNum, thirdNum) {
    let sum = firstNum + secondNum + thirdNum;
    let isInteger = sum % 1 === 0;
    if (isInteger) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
}
IntegerandFloat(9, 100, 1.1)