//[3,-3,-2,2,3,1,-2,-3,4,2,-6,-3,-1,3,1,2]
//write a function that will find the maximum sum sunarray or largest sum contigous subarray

function maxSumSubarray(arr) {
    let max_starting = arr[0];
    let max_ending = 0;
    let start = 0;
    let search = 0;
    let end = 0;

    for (let i = 0; i < arr.length; i++){
        max_ending = max_ending + arr[i]
        if (max_starting < max_ending) {
            max_starting = max_ending;
            start = search;
            end = i;
        }
        if (max_ending < 0) {
            max_ending = 0;
            search = i + 1;
        }
    }
    //    return [start, end]
    return arr.slice(start, end + 1)
}

console.log(maxSumSubarray([4, -3, -2, 2, 3, 1, -2, -3, 4, 2, -6, -3, -1, 3, 1, 2]))