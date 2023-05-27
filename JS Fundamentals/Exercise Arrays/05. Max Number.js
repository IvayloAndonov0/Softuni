function MaxNumber(arr) {
  let result = ``;
  let arrLength = arr.length;
  for (let i = 1; i <= arrLength; i++) {
    let isMax = true;
    let currentNum = Number(arr[i - 1]);
    for (let j = i; j < arrLength; j++) {
      let nextNum = Number(arr[j]);
      if (nextNum >= currentNum) {
        isMax = false;
        break;
      }
    }
    if (isMax == true) {
      result += `${currentNum} `;
    }
  }
  console.log(result);
}
MaxNumber([1, 4, 3, 2]);
