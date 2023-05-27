function MaxSequenceofEqualElements(arr) {
  let sequence = 1;
  let maxSequence = 0;
  let maxSequenceNum = 0;
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    if (i !== 0) {
      let currentNum = Number(arr[i]);
      let prevNum = Number(arr[i - 1]);
      if (currentNum === prevNum) {
        sequence++;
        if (sequence > maxSequence) {
          maxSequence = sequence;
          maxSequenceNum = currentNum;
        }
      } else {
        sequence = 1;
      }
    }
  }
  console.log(`${(maxSequenceNum + ` `).repeat(maxSequence)}`);
}
MaxSequenceofEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
