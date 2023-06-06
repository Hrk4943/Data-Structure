const LinkedList = require('./LinkedList.js')

class LinkedListStack {
    constructor() {
        this.list = new LinkedList()
    }

    push(value) {
        this.list.prepend(value)
    }

    pop() {
        return this.list.removeFromTop()
    }

    top() {
        return this.list.head.value
    }

    replaceValue(oldValue, newValue) {
        this.list.replace(oldValue,newValue)
    }
    find(value){
       return this.list.findValue(value)
    }

    isEmpty() {
        return this.list.isEmpty()
    }

    getSize() {
        return this.list.getSize()
    }

    print() {
        return this.list.print()
    }
}


const stack = new LinkedListStack()


stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()
console.log(stack.pop())
console.log(stack.top())
console.log(stack.getSize())

stack.replaceValue(30, 35);
stack.print();
console.log(stack.find(35))