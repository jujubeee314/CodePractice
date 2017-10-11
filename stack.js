(function () {

    //Constructor for linked list data structure
    class Node {
        constructor(data) {
            this.data = data;
            this.next = null;
        }
    };

    class Stack {
        //Contructor of stack
        constructor() {
            this.length = 0;
            this.head = null;
        }
        //Add object to the top of the list
        push(value) {
            let newNode = new Node(value);
            let currentNode = this.head;

            if (!currentNode) {

                this.head = newNode;
                this.length++;

                return newNode;
            }

            newNode.next = currentNode;
            this.head = newNode;

            this.length++;

            return newNode;
        }
        //Removes object from top of list and returns removed object
        pop() {

            if(this.length > 0) {
                let topNode = this.head;
                this.head = topNode.next;
                this.length--;
                return topNode;
            } else {
                return null;
            }                   

        }
        //Returns number of objects in the stack
        size() {
            return this.length;
        }
        //Return true if stack is empty or false
        isEmpty() {
            return (this.length > 0) ? false : true;
        }
    }

}());