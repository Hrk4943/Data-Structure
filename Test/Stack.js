const LinkedList=require('./LinkedList')

class Stack{
    constructor(){
        this.list=new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
        return this.list.remove()
    }

    top(){
        return this.list.head.value
    }

    find(value){
        return this.list.find(value)
    }

    replaceValue(oldValue,newValue){
        this.list.replace(oldValue,newValue)
    }

    print(){
        this.list.print()
    }
}


const stack=new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.print()
console.log(stack.pop())
console.log(stack.find(30)) 
stack.replaceValue(10,100)

stack.print() 
console.log(stack.top())