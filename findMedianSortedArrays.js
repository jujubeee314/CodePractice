/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {

    let totalLen = nums1.length + nums2.length, 
        nums1end = nums1[nums1.length - 1],
        nums2end = nums2[nums2.length - 1];
    let largest = (nums1end > nums2end) ? nums1end : nums2end;
    let smallest = (nums1[0] > nums2[0]) ? nums1[0] : nums2[0];

    if(9 % 2) {
        console.log('true');
    }

    return (largest + smallest) / 2;
    
};

/* Test Cases */

console.log(findMedianSortedArrays([1,3],[2,4]));
console.log(findMedianSortedArrays([1,3,5],[2,4,6,8]));
