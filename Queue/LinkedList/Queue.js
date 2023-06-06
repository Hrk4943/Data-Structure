const LinkedList=require('./LinkedList.js')


class Queue{
    constructor(){
        this.list=new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromTop()
    }

    top(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    find(value){
        return this.list.findValue(value)
    }

    replace(oldValue,newValue){
        this.list.replace(oldValue,newValue)
    }

    print(){
        return this.list.print()
    }

}

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.print()
queue.dequeue()
console.log(queue.find(40))
console.log(queue.top())
queue.replace(50,100)
queue.print()