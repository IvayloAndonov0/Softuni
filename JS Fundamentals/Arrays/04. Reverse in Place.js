function ReverseinPlace(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    let currentEl = arr[i];
    let nextEl = arr[arr.length - 1 - i];
    arr[i] = nextEl;
    arr[arr.length - 1 - i] = currentEl;
  }
  console.log(arr.join(" "));
}
ReverseinPlace(["a", "b", "c", "d", "e"]);
