class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    addNewNodeAtFirst(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        } else {
            node.next=this.head
            this.head=node
        }
        this.size++
    }

     print() {
        if(this.isEmpty()){
            console.log("Empty")
        } else {
            console.log(JSON.stringify(this.head));
        }
    }

}

const list=new LinkedList()
list.addNewNodeAtFirst(10)
list.print()
list.addNewNodeAtFirst(15)
list.addNewNodeAtFirst(20)
list.print()