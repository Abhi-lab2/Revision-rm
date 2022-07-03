let arr =[0, 0, 1, 0, 1, 0]
let N = 6

function PoliceOfBerland(N,arr){
  let count = 0
  for(let i=0;i<N;i++){
    if(i===0 && arr[i]===1 && arr[i+1]===0){
      arr[i+1]  = 2
      count++
    }
    else if(i===N-1 && arr[i]===1 && arr[N-2]===0){
      arr[N-2] = 2
      count++
    }
    else {
      if(arr[i]===1 && arr[i-1]===0 && arr[i+1] == 0){
        arr[i+1] = 2
        count ++
      }
    }
  }
  console.log(count)
}
PoliceOfBerland(N,arr)








// let p = 6;
// let ar = [0, 0, 1, 0, 1, 0];

// function berlinpolice(p, ar) {
//   let count = 0;
//   let start = 0;
//   let end = ar.length - 1;
//   while (start < end) {
//     // console.log("check");
//     if (end == 1) {
//       count++;
//       end--;
//       break;
//     }
//     if (start == 0) {
//       start++;
//     }
//     if (end == 0) {
//       end--;
//     }
//   }
//     console.log(count);
// }

// berlinpolice(p, ar);
