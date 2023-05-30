class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    addItemsToLast(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty")
        } else {
            console.log(JSON.stringify(this.head));
        }
    }
}


const list = new LinkedList()
list.addItemsToLast(10)
list.print()
list.addItemsToLast(20)
list.addItemsToLast(30)
list.print()
list.addItemsToLast(40)
list.print()