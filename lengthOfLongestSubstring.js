/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    var currLongest = [], currCount = 0, longest = [], count = 0;

    if(s.length === 1) return 1; 

    for (var i = 0; i < s.length; i++) {

        //console.log(longest.indexOf(s[i]));
        if (longest.indexOf(s[i]) === -1) {            
            longest.push(s[i]);
            count++;
        } else if (longest.indexOf(s[i]) >= 0) {
            longest.push(s[i]);
            longest.shift();
            if(currCount <= count) {
                currLongest = longest; 
                currCount = count;
                console.log(currLongest, currCount);
            }            
            longest = [];
            count = 0;
            longest.push(s[i]);
            count++;
        }

    }

    if(currCount <= count) {
        currLongest = longest; 
        currCount = count;
    }   

    return currCount;
};

/* Test Cases */
//console.log(lengthOfLongestSubstring('abcabcdcc')); //4
//console.log(lengthOfLongestSubstring('bbbbbb')); //1
//console.log(lengthOfLongestSubstring('pwwkew')); //3
//console.log(lengthOfLongestSubstring('c')); //1
//console.log(lengthOfLongestSubstring('au')); //2
console.log(lengthOfLongestSubstring('dvdf')); //3