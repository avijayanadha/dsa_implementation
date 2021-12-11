class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        let node = new Node(data)
        /*
        If the list is empty assign tail and head to the created node
        otherwise new node will be head and new node.next points to old head
        */
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.head;
            node.next = temp;
            this.head = node;
        }

        this.length++;
    }

    pop() {
        /*
        Remove the last element in the list
        1 - > 2 -> 3 -> 4 -> 5
        removes 5 in this example
        
        - if the list is empty return null
        - if the list is of length 1 return head and set head and tail as null
        - else iterate and find second to last element and returns its next node and point second to last element next as null also set tail as the second to last node
        */
        if (this.head === null) {
            return null;
        } else if (this.head === this.tail) {
            let head = this.head;
            this.head = null;
            this.tail = null;
            this.length--;

            return head;
        } else {
            let node = this.head;
            let previousNode;

            while(node.next !== null) {
                previousNode = node;
                node = node.next;
            }
            
            previousNode.next = null;
            this.tail = previousNode;
            this.length--;
            return node;

        }
    }

    shift() {
        /*
        Removes the first element from the list and return it
        - if the list is empty return null
        - if the list has only one element return that and set head and tail as null
        - return the head and set the new head as old head.next
        */

        if (this.head === null) {
            return null;
        } else if(this.head === this.tail) {
            let head = this.head;
            this.head = null;
            this.tail = null;
            this.length--;

            return head;
        } else {
            let oldHead = this.head;
            this.head = oldHead.next;
            this.length--;

            return oldHead;
        }
    }
}

