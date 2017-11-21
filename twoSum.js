/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) {
    
    for(let i = 0; i < nums.length; i++) {

        let diff = target - nums[i];
        let index = nums.indexOf(diff);
        if(index !== -1 && index !== i) {
            return [i, index];
        }

    }
    
};

/* Test Cases */
console.log(twoSum([2, 11, 7, 15, 2], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([15, 1, 8], 9));
console.log(twoSum([11, 1, 3], 9));
