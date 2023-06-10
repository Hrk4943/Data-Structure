class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    find(value) {
        let current = this.head
        let pos = 0
        while (current !== null) {
            if (current.value === value) {
                return pos
            }
            current = current.next
            pos++
        }
        return false
    }

    remove(){
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
        let current=this.head
        while(current!==null){
            if(current.value===oldValue){
                current.value=newValue
            }
            current=current.next
        }
    }
    
    print(){
        console.log(JSON.stringify(this.head))
    }
}


module.exports=LinkedList