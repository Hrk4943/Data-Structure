const LinkedList=require('./LinkedList')

class Queue{
    constructor(){
        this.list=new LinkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
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

const queue=new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.print()
console.log(queue.top())
console.log(queue.find(40))
queue.replaceValue(30,300)
queue.print()
queue.dequeue()
queue.print()