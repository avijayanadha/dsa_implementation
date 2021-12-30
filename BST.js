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

    delete(value) {

        function lift(node, nodeToDelete) {
            if (node.left) {
                node.left = lift(node.left, nodeToDelete)
                return node
            } else {
                nodeToDelete.data = node.data;
                return node.right;
            }
            
        }

        function deletefn(value, node) {
            if (node === null) {
                return null
            } else if (value < node.data) {
                node.left = deletefn(value, node.left)
            } else if (value > node.data) {
                node.right = deletefn(value, node.right)
            } else if (value === node.data) {
                if (node.left === null) {
                    return node.right;
                } else if (node.right === null) {
                    return node.left;
                } else {
                    node.right = lift(node.left, node)
                    return node;
                }
            }

        }

        deletefn(value, this.head)
    }

    breadthFirstSearch () {
        /*

            Take advantage of queue fifo
            add head node to queue and itretae until there is something in the queue
            in the loop add left and right child to the queue
        */

        let queue = [this.head]
        let result = []

        while (queue.length) {
            let firstElement = queue.shift()
            if (firstElement.left) {
                queue.push(firstElement.left)
            }

            if (firstElement.right) {
                queue.push(firstElement.right)
            }
            result.push(firstElement.data)
        }

        return result;
    }

    dfs(order) {
        let results = []
        function preOrder(node) {
            if (!node) {
                return;
            }

            results.push(node.data);
            preOrder(node.left);
            preOrder(node.right);
        }

        function inOrder(node) {
            if (!node) {
                return;
            }

            inOrder(node.left);
            results.push(node.data);
            inOrder(node.right);
        }

        function postOrder(node) {
            if (!node) {
                return;
            }

            postOrder(node.left);
            postOrder(node.right);
            results.push(node.data);
        }


        if (order === 'pre') {
            preOrder(this.head);  
        } else if (order === 'in') {
            inOrder(this.head);
        } else {
            postOrder(this.head);
        }
        

        return results;
    }
}