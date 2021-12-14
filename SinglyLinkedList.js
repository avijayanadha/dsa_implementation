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

        (head) 1 -> 2 -> 3 -> 4 (Tail)
        If the list is empty assign tail and head to the created node
        otherwise new node will be the new tail

        */
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            let temp = this.tail;
            temp.next = node;
            this.tail = node;
        }

        this.length++;
    }
    
    unshift(data) {
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

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            return this.head;
        } else if (index === (this.length - 1)) {
            return this.tail;
        } else {
            let i=0, node = this.head;

            while (node.next !== null) {
                if (i === index) {
                    return node;
                } else {
                    node = node.next;
                }
                i++;
            }
        }
    }

    set(index, value) {
        let node = this.get(index);
        node.data = value;
        return node;
    }

    insert (index, value) {
        let previousIndex = index -1, previousNode, currentNode;
        let newNode = new Node(value);

        if (index < 0 || index > this.length) {
            return null;
        } else if (index === 0) {
            newNode.next = this.head;
            this.head = newNode;
            this.length ++;

            return this;
        } else if (index === this.length) {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length ++;
            
            return this;
        } else {
            previousNode = this.get(previousIndex);
            currentNode = previousNode.next;

            previousNode.next = newNode;
            newNode.next = currentNode;
            console.log(this.print());
            this.length ++;

            return this;
        }
    }

    remove(index) {
        let node, nextNode, previousNode;

        if (index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            if (this.head === this.tail) {
                node = this.head;
                this.head = this.tail = null;
                this.length --;

                return node;
            } else {
                node = this.head;
                this.head = node.next;

                node.next = null;
                this.length --;
                
                return node;
            }
           
        } else if (index === (this.length - 1)) {
            previousNode = this.get(index -1)
            node = this.tail;
            this.tail = previousNode;
            this.tail.next = null;
            node.next = null;

            this.length --;
            return node;
        } else {
            previousNode = this.get(index -1)
            node = previousNode.next;
            nextNode = node.next;

            previousNode.next = nextNode;

            node.next = null;

            this.length --;
            return node;
        }
    }

    print() {
        let listString = '', node = this.head;
        if (node) {
            listString = `${node.data}`;

            while (node.next) {
                node = node.next;
                listString = `${listString} -> ${node.data}`;
            }

            return listString;
            
        } else {
            return listString;
        }
        
    }
}

