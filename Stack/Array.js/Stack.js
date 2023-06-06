class Stack{
    constructor(){
        this.array=[]
    }

    push(value){
        this.array.push(value)
    }

    pop(){
        return this.array.pop()
    }

    top(){
        return this.array[this.array.length-1]
    }

    find(value){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]===value){
                return i
            }
        }
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

    replaceValue(oldValue,newValue){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]==oldValue){
                this.array[i]=newValue
            }
        }
    }

    insertValueAt(value, position) {
        if (position >= 0 && position <= this.array.length) {
          this.array.splice(position, 2, value);
        }
      }

    getSize(){
        return this.array.length
    }

    isEmpty(){
        return this.array.length===0
    }

    print(){
        console.log(this.array)
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
console.log("Pop- ",stack.pop())
console.log("Top- ",stack.top())
console.log("Size",stack.getSize())
console.log("delete middle ---", stack.deleteMiddleValue());
console.log("delete---", stack.deleteValue(40));
console.log("Position- ",stack.find(50))
stack.replaceValue(50,100)
stack.insertValueAt(25, 3)
stack.print()



