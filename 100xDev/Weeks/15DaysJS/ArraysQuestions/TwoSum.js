// https://leetcode.com/problems/two-sum/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions

let nums = [0,0,1,1,1,2,2,3,3,4];
let i = 0;

for (let j = 1; j < nums.length; j++) {
    if (nums[j] == nums[i]){
        nums.splice(j,j)
        i++;
    }
    console.log(nums);
}



// for (let i = 0; i<nums.length; i++){
//     if (nums[i] == nums[i+1]){
//         numsAfter = nums.slice(i+1);
//         k++;
//         console.log(k);
//     }
// }
// console.log(numsAfter);

