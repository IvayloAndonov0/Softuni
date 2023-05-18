function AmazingNumbers(num) {
    let numASText = num.toString();
    let sum = 0;
    for (let i = 0; i < numASText.length; i++) {
        sum += Number(numASText[i]);
    }
    let sumAsString = sum.toString()
    let isAmazing = "False";
    for (let i = 0; i < sumAsString.length; i++) {
        if (Number(sumAsString[i]) === 9) {
            isAmazing = "True";
            break;
        }
    }
    console.log(`${num} Amazing? ${isAmazing} `);
}
AmazingNumbers(999)