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

    arrayToLinkeList(array){
        if(array.length===0){
            return
        }
        let head = new Node(array[0]);
        let current = head;
      
        for (let i = 1; i < array.length; i++) {
          const newNode = new Node(array[i]);
          current.next = newNode;
          current = newNode;
        }
      
        return head;
      
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty")
        } else {
            console.log(JSON.stringify(this.head));
        }

    }
}

const array=[1,2,3,4,5]
const list = new LinkedList(array);
list.print()