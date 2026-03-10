function BubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      // Asscending order
      if (arr[j] > arr[j + 1]) {
        // swap with variable temp
        // let temp = arr[j]
        // arr[j] = arr[j+1]
        // arr[j+1] = temp
        // swap using descrtrucuted assignment
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      // Desceding order
      // if(arr[j] < arr[j+1]){
      //     // swap with variable temp
      //     let temp = arr[j]
      //     arr[j] = arr[j+1]
      //     arr[j+1] = temp
      // [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
      // }
    }
  }
  return arr;
}
let arr = [4, 1, 5, 3, 2];
let bubblesort = BubbleSort(arr);
console.log(bubblesort);




