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

