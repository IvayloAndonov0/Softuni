function MagicSum(arr, magicNum) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      let prevNum = Number(arr[i - 1]);
      for (let j = i; j < arr.length; j++) {
        let currentNum = Number(arr[j]);
        let sum = currentNum + prevNum;
        if (sum === magicNum) {
          console.log(`${prevNum} ${currentNum}`);
        }
      }
    }
  }
}
MagicSum([1, 7, 6, 2, 19, 23], 8);
