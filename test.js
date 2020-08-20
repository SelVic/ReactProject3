// function maxDifference(arr) {
//     let maxDiff = -1;
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > min && maxDiff < arr[i] - min) {
//             maxDiff = arr[i] - min;
//         }
//
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return maxDiff;
// }
<script>
    (miliseconds =>{
    let currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {}
})(10000)
</script>
