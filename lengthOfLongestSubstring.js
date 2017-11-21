/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {

    let currLongest = [], currCount = 0, longest = [], count = 0;

    for (let i = 0; i < s.length; i++) {

        let index = longest.indexOf(s[i]);
        if (index === -1) {            
            longest.push(s[i]);
            count++;
        } else if (index == 0) {
            longest.push(s[i]);
            longest.shift();
        } else if (index > 0) {
            if(currCount <= count) {
                currLongest = longest; 
                currCount = count;
            }
            longest = longest.splice(i + 1);
            count = longest.length;   
            longest.push(s[i]);
            count++;
        }

    }

    if(currCount <= count) {
        currLongest = longest; 
        currCount = count;
    }

    return {
        count: currCount,
        longest_Substring: currLongest
    };
};

/* Test Cases */
console.log(lengthOfLongestSubstring('abcabcdcc')); //4
console.log(lengthOfLongestSubstring('bbbbbb')); //1
console.log(lengthOfLongestSubstring('pwwkew')); //3
console.log(lengthOfLongestSubstring('c')); //1
console.log(lengthOfLongestSubstring('au')); //2
console.log(lengthOfLongestSubstring('dvdf')); //3
console.log(lengthOfLongestSubstring('tmmzuxt')); //5
console.log(lengthOfLongestSubstring('ohvhjdml')); //6