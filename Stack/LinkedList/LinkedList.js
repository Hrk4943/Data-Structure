class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }
    getSize(){
        return this.size
    }

    prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        } else {
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    removeFromTop(){
        if(this.isEmpty()){
            return null
        } 
        const value=this.head.value
        this.head=this.head.next
        this.size--
        return value
    }

    replace(oldValue,newValue){
        if(this.isEmpty()){
            return null
        }
        let currentNode=this.head
        while(currentNode!==null){
            if(currentNode.value==oldValue){
                currentNode.value=newValue
            }
            currentNode=currentNode.next
        }
    }

    findValue(value) {
        let currentNode = this.head;
        let position=0
        while (currentNode !== null) {
          if (currentNode.value === value) {
            return position;
          }
          currentNode = currentNode.next;
          position++
        }
        return false;
      }
    

    print(){
        console.log(JSON.stringify(this.head))
    }
}


module.exports=LinkedList