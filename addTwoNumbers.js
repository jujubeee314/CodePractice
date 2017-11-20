/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require('./LinkList/listNode');

/**
 * @param {ListNode} a
 * @param {ListNode} b
 * @return {ListNode}
 */
const addTwoNumbers = function (a, b) {

    let list3 = new ListNode(0);
    let curr = list3;
    let carry = 0;

    while (a || b) {
        let x = (a) ? a.val : 0;
        let y = (b) ? b.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        a = (a) ? a.next : null;
        b = (b) ? b.next : null;
    }
    if(carry > 0) {
        curr.next = new ListNode(carry);
    }

    return list3.next;

};

var addTwoNumbersOptimized = function(l1, l2) {
    let longer = l1, shorter = l2;
    let digitSum = longer.val + shorter.val;
    const sumList = new ListNode(digitSum % 10);
    let current = sumList;
    longer = longer.next;
    shorter = shorter.next;
    while (longer && shorter) {
        digitSum = longer.val + shorter.val + (digitSum > 9 ? 1 : 0);
        current.next = new ListNode(digitSum % 10);
        current = current.next;
        longer = longer.next;
        shorter = shorter.next;
    }
    if (!longer) {
        [longer, shorter] = [shorter, longer]
    }
    while (longer && digitSum > 9) {
        digitSum = longer.val + 1;
        current.next = new ListNode(digitSum % 10)
        current = current.next;
        longer = longer.next;
    }
    if (longer) {
        current.next = longer;
    } else if (digitSum > 9) { 
        current.next = new ListNode(1);
    }
    return sumList;
};