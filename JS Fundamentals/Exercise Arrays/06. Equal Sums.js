function EqualSums(arr) {
  let leftSum = 0;
  let rightSum = 0;
  let isEqual = false;
  let arrLength = arr.length;

  for (let currenti = 0; currenti < arrLength; currenti++) {
    for (let i = 0; i < arrLength; i++) {
      if (i !== currenti) {
        let num = Number(arr[i]);
        if (i < currenti) {
          leftSum += num;
        } else if (i > currenti) {
          rightSum += num;
        }
      }
      if (currenti === 0) {
        leftSum = 0;
      } else if (currenti === arrLength - 1) {
        rightSum = 0;
      }
    }
    if (leftSum == rightSum) {
      console.log(currenti);
      isEqual = true;
    } else {
      leftSum = 0;
      rightSum = 0;
    }
  }
  if (isEqual == false) {
    console.log("no");
  }
}
EqualSums([1, 2, 3, 3]);
