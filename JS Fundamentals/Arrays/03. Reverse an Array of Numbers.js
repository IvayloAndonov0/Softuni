function ReverseanArrayofNumbers(n, arr) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(arr[i]);
  }
  let output = "";
  for (let i = res.length - 1; i >= 0; i--) {
    output += res[i] + " ";
  }
  console.log(output);
}
ReverseanArrayofNumbers(3, [10, 20, 30, 40, 50]);
