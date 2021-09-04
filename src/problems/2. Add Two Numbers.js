/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var ListNode = function(val,next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 var addTwoNumbers = function(l1, l2) {

    let currentL1 = l1;
    let currentL2 = l2;
    let currentL3;
    let l3;
    let sum=0;
    let carry=0
    while( currentL1 || currentL2) {
        sum=0
        sum = sum + carry;

        if(currentL1){
            sum += currentL1.val;
            currentL1 = currentL1.next;
        }

        if(currentL2){
            sum+= currentL2.val;
            currentL2 = currentL2.next;
        }

        if(sum > 9){
            carry = 1;
            sum = sum % 10;
        }else {
            carry = 0;
        }

        let listNode = new NodeList(sum);

        if(!currentL3){
            currentL3 = listNode;
            l3 = currentL3;
        }else {
            currentL3.next = listNode;
            currentL3 = currentL3.next;
        }

    }

    if(carry)currentL3.next = new ListNode(1);

    return l3;
};