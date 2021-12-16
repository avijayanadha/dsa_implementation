class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {

        /*
            create a new node with the value,
            if head is null assign the newly created node as head and tail
        */
        let node = new Node(val);

        if (this.head === null) {
            this.head = this.tail = node;
            this.length ++;
        } else {
            let tail = this.tail;
            tail.next = node;
            node.prev = tail;

            this.tail = node
            this.length++;
        }
    }

    pop() {
        /* get the tail element and return it  
           reduce the length by one

           if head and tail are same, then it means we have only one element or an empty list in that case we will set both head and tail as null
        */
        let node = this.tail;
        if (this.tail === this.head) {
            this.head = this.tail = null;
        } else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }

        if (this.length) {
            this.length --;
        }   
        
        return node;
    }

    shift() {
        /*
            Retrive a node from the head
        */

        let node = this.head;
        if (this.tail === this.head) {
            this.head = this.tail = null;
        } else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }

        if (this.length) {
            this.length --;
        }   
        
        return node;
    }

    unshift(val) {
        /* 
          insert as head
        */

        let node = new Node(val);

        if (this.head === null) {
            this.head = this.tail = node;
        } else {
            let temp = this.head;
            this.head = node;
            node.next = temp;
            temp.prev = node;
        }

        this.length ++;
        return this.print()
    }

    print() {
        let listString = '', node = this.head;
        if (node) {
            listString = `${node.data}`;

            while (node.next) {
                node = node.next;
                listString = `${listString} <-> ${node.data}`;
            }

            return listString;
            
        } else {
            return listString;
        }
        
    }

    get(index) {
        let mid = Math.floor(this.length/2), node=null, counter;

        if (index < 0 || index >= this.length) {
            return null;
        }

        if (index >= mid) {
            /*
            * We start search from the tail
            */
            counter = this.length - 1;
            node = this.tail;

            while (counter >= mid) {
                if (counter == index) {
                    return node;
                } else {
                    node = node.prev;
                    counter --;
                }
            }


        } else {
            /*
            * We start search from head
            */
            counter = 0;
            node = this.head;

            while (counter < mid) {
                if (counter === index) {
                    return node;
                } else {
                    node = node.next;
                    counter ++;
                }
            }
        }

        return node;
    }

    set(index, value) {
        let node = this.get(index);

        if (node && value) {
            node.data = value;
        }

        return this.print();
    }

    insert(index, value) {
        let newNode = new Node(value), prevNode, nextNode;

        if (index === 0) {
            nextNode = this.head;
            this.head = newNode;
            this.head.next = nextNode;

            nextNode.prev = this.head;
        } else if (index === (this.length - 1)) {
            prevNode = this.tail;
            this.tail = newNode;

            prevNode.next = this.tail;
            this.tail.prev = prevNode;
        } else {
            prevNode = this.get(index - 1)

            if (prevNode) {
                newNode.next = prevNode.next;
                newNode.prev = prevNode;
                prevNode.next = newNode;
            }
          
        }
    }

    remove(index) {
        let node = this.get(index);

        if (node) {
            let prevNode = node.prev, nextNode = node.next;

            if (prevNode === null && nextNode) {
                //remove the head node
                this.head = nextNode;
                this.head.prev = null;
            } else if (prevNode && nextNode === null) {
                //remove the tail node
                this.tail = prevNode;
                this.tail.next = null;
             
            } else if(prevNode === nextNode) {
                //make the list empty set head and tail as null
                this.head = this.tail = null;
               
            } else {
                //remove the node from the location
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
            }

            this.length --;
            node.prev = node.next = null;
            return node;

        } else {
            return null;
        }
    }

    reverse() {
        /*
            lets start form the head
            we need a prevNode, currentNode and nextNode

            at start prevNode = null
            replace currentNode.prev as next and next as prev 

        */

        let prevNode = null, currentNode = this.head, nextNode = currentNode.next;

        this.tail = currentNode;
       
        while (currentNode.next) {
            currentNode.next = prevNode;
            currentNode.prev = nextNode;

            prevNode = currentNode;
            currentNode = nextNode;
            nextNode = currentNode.next;
        }

        this.head = currentNode;
        this.head.next = prevNode;

        return this.print()
    }
}