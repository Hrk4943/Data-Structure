class Queue{
    constructor(){
        this.array=[]
    }

    enqueue(value){
        this.array.push(value)
    }

    dequeue(){
        return this.array.shift()
    }

    top(){
        return this.array[0]
    }

    deleteMiddle(){
        const middle=Math.floor(this.array.length/2)
        const deleteMid=this.array.splice(middle,1)
        return deleteMid[0]
    }

    deleteValue(value){
        const index=this.array.indexOf(value)
        const deleteVal=this.array.splice(index,1)
        return deleteVal[0]
    }

    find(value){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]===value){
                return i
            }
        }
    }

    replace(oldValue,newValue){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]===oldValue){
                this.array[i]=newValue
            }
        }
    }

    insert(pos,val){
        if(pos>=0 && pos<=this.array.length){
            this.array.splice(pos,2,val)
        }
    }

    print(){
        console.log(this.array)
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
console.log(queue.dequeue())
console.log(queue.find(50))
console.log(queue.deleteMiddle())
console.log(queue.deleteValue(60))
queue.print()
console.log(queue.top())
