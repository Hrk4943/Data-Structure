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

    replace(oldValue,newValue){
        for(let i=0;i<this.array.length;i++){
            if(this.array[i]===oldValue){
                this.array[i]=newValue
            }
        }
    }

    deleteMiddle(){
        const middle=Math.floor(this.array.length/2)
        const deleteMid=this.array.splice(middle,1)
        return deleteMid[0]
    }

    deleteValue(value){
        const index=this.array.indexOf(value)
        const deleteVal=this.array.slice(index,1)
        return deleteVal[0]
    }

    insert(pos,val){
        if(pos>=0 && pos <= this.array.length){
            this.array.splice(pos,2,val)
        }
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
console.log(stack.pop())
console.log(stack.find(20))
stack.replace(20,200)
stack.print()
console.log(stack.deleteValue(30))
console.log(stack.deleteMiddle())
stack.insert(2,600)
stack.print()