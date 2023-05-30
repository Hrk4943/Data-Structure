class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return;
        }
        if (index === 0) {
            this.prepend(value);
        } else {
            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    remove(index){
        if(index<0 || index>=this.size){
            return null
        }
        let removedNode
        if(index===0){
            removedNode=this.head
            this.head=this.head.next
        } else {
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode=prev.next
            prev.next=removedNode.next
        }
        this.size++
        return removedNode.value
    }
    removeValue(value) {
        if (this.isEmpty()) {
          return null;
        }
        if (this.head.value === value) {
          this.head = this.head.next;
          this.size--;
          return value;
        } else {
          let prev = this.head;
          while (prev.next && prev.next.value !== value) {
            prev = prev.next;
          }
          let removedNode
          if (prev.next) {
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return value;
          }
          return null;
        }
      }

    search(value){
        if(this.isEmpty()){
            return null
        }
        let i=0
        let current=this.head
        while(current){
            if(current.value === value){
                return i
            }
            current=current.next
            i++
        }
        return -1
    }   

    reverse(){
        let prev=null
        let current=this.head
        while(current){
            let next=current.next
            current.next=prev
            prev=current
            current=next
        }
        this.head=prev
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty")
        } else {
            console.log(JSON.stringify(this.head));
        }

    }
}

const list = new LinkedList();
list.insert(10, 0);
list.insert(20, 0);
list.insert(30, 0);
list.insert(40, 3);
list.print();
list.removeValue(40)
// list.reverse()
list.print()
// console.log(list.search(40))
// list.remove(2)
// list.print()
// list.remove(0)
// list.print()
