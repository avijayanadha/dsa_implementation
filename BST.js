class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.head = null;
    }

    insert(data) {
        let node = new Node(data);
        let currentNode = this.head;

        function checkAndInsert(node, newNode) {
            if (node === null) {
                return node = newNode;
            }   

            if (newNode.data < node.data) {
                if (node.left === null) {
                    node.left = newNode;
                    return this;
                } 

                checkAndInsert(node.left, newNode)
            } else if (newNode.data > node.data) {
                if (node.right === null) {
                    node.right = newNode;
                    return this;
                }
                checkAndInsert(node.right, newNode)
            }
        }

        

        if(!this.head) {
            this.head = node;
        } else {
           checkAndInsert(this.head, node);
        }
    }


    find(data) {
       function checkAndFind(data, node) {
           if (!node) {
               return null
           } else if (node.data === data) {
               return node
           } 

           if (data > node.data) {
               return checkAndFind(data, node.right)
           } else {
               return checkAndFind(data, node.left)
           }
       }

       return checkAndFind(data, this.head)
    }
}