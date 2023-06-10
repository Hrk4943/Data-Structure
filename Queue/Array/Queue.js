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

    deleteMiddleValue() {
        const middleIndex = Math.floor(this.array.length / 2);
        const deletedElement = this.array.splice(middleIndex, 1);
        return deletedElement[0];
    }

    deleteValue(value) {
        const index = this.array.indexOf(value);
          const deletedElement = this.array.splice(index, 1);
          return deletedElement[0];
    }

    replace(oldValue,newValue){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]==oldValue){
                this.array[i]=newValue
            }
        }
    }
    
    find(value){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]==value){
                return i
            }
        }
    }

    insertValueAt(value, position) {
        if (position >= 0 && position <= this.array.length) {
          this.array.splice(position, 0, value);
        }
      }

    top(){
        return this.array[0]
    }

    isEmpty(){
        return this.array.length===0
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
console.log("top-- ",queue.top())
console.log("dequeue---",queue.dequeue())
console.log("dequeue middle ---", queue.deleteMiddleValue( ));
console.log("delete---", queue.deleteValue(30));
queue.replace(50,100)
console.log("position--",queue.find(100))
queue.insertValueAt(25, 2)
queue.print()
