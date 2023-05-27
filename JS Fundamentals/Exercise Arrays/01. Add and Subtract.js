function AddandSubtract(arr) {
  let originalSum = 0;
  let modifiedSum = 0;
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let currentNum = Number(arr[i]);
    originalSum += currentNum;
    if (currentNum % 2 == 0) {
      currentNum += i;
    } else {
      currentNum -= i;
    }
    arr[i] = currentNum;
    modifiedSum += currentNum;
  }
  console.log(arr);
  console.log(originalSum);
  console.log(modifiedSum);
}
AddandSubtract([5, 15, 23, 56, 35]);
