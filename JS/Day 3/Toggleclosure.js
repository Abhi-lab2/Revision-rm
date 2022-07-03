// example code
function toggler() {
  // console.log(arguments);
  let arr = Object.values(arguments); //prints values of the array
  // let arr1 = Object.keys(arguments); //prints keys
  console.log(arr);
  let x = 0;
  return function () {
    console.log(arr[x++ % arr.length]); //x++ for inc values
  };
}
// toggler(1, 7, 3)
const toggle = toggler(1, 7, 3);

toggle();
// // 1
toggle();
// // 7
toggle();
// // 3
