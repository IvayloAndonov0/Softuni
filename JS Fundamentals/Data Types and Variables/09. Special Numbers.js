function SpecialNumbers(number) {
    for (let i = 1; i <= number; i++) {
        let currentNum = i;
        let sumOfDigits = 0;
        while (currentNum > 0) {
            sumOfDigits += currentNum % 10;
            currentNum = Math.trunc(currentNum / 10);
        }
        const isSpecialNumber = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
        console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
    }
}

SpecialNumbers()