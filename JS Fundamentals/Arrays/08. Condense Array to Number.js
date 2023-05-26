function CondenseArraytoNumber(num) {
  let res = [];
  while (num.length > 1) {
    for (let i = 0; i < num.length - 1; i++) {
      res[i] = num[i] + num[i + 1];
    }
    num = res;
    res = [];
  }
  console.log(num.join(" "));
}
CondenseArraytoNumber([2, 10, 3]);
