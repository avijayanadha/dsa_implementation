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
}
