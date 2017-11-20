/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    
    var arr = (""+x).split("");
    var neg = (arr[0] === '-') ? arr[0] : null;
    var rev = [];

    for(var i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }

    var answer = rev.join("");

    answer = (neg) ? neg + answer : answer;

    return parseInt(answer,32);

};


//Test Cases
console.log(reverse(321));
console.log(reverse(-123));
console.log(reverse(9646324351));