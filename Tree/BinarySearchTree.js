class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder() {
        const queue = []
        queue.push(this.root)
        while (queue.length) {
            let currentValue = queue.shift()
            console.log(currentValue.value)
            if (currentValue.left) {
                queue.push(currentValue.left)
            }
            if (currentValue.right) {
                queue.push(currentValue.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

    isBinarySearchTree() {
        return this.checkBst(this.root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
    }
    checkBst(node, min, max) {
        if (node === null) {
            return true
        }
        if (node.value <= min && node.value >= max) {
            return false
        }
        return (
            this.checkBst(node.left, min, node.value) && this.checkBst(node.right, node.value, max)
        )
    }

    findClosestValue(target) {
        let closestValue = this.root.value
        let minDifference = Math.abs(this.root.value - target)
        while (this.root !== null) {
            const currentDiff = Math.abs(this.root.value - target)
            if (currentDiff < minDifference) {
                minDifference = currentDiff
                closestValue = this.root.value
            }
            if (target === this.root.value) {
                return this.root.value
            } else if (target < this.root.value) {
                this.root = this.root.left
            } else {
                this.root = this.root.right
            }
        }
        return closestValue

        // let closestValue = this.root.value;
        // let minDifference = Math.abs(target - closestValue);
        // const findClosest = (node) => {
        //     if (!node) {
        //         return;
        //     }
        //     const currentDifference = Math.abs(target - node.value);
        //     if (currentDifference < minDifference) {
        //         closestValue = node.value;
        //         minDifference = currentDifference;
        //     }
        //     if (target < node.value) {
        //         findClosest(node.left);
        //     } else if (target > node.value) {
        //         findClosest(node.right);
        //     }
        // };

        // findClosest(this.root);
        // return closestValue;
    }
}

const bst = new BinarySearchTree()
// console.log("This is Empty", bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(20)
bst.insert(3)
bst.insert(9)
// console.log(bst.root)
// console.log(bst.search(bst.root,10))
// console.log(bst.search(bst.root,5))
// console.log(bst.search(bst.root,15))
// console.log(bst.search(bst.root,30))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.levelOrder()
// console.log("MIN--",bst.min(bst.root))
// console.log("Max--",bst.max(bst.root))
// bst.delete(10)
// bst.levelOrder()
// console.log(bst.isBinarySearchTree())
console.log(bst.findClosestValue(-1))

